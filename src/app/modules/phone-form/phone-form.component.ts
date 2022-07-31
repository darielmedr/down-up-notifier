import { PhoneCodePrefixPipe } from './pipes/phone-code-prefix.pipe';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import { CountryCode } from './models/country-code.model';
import { COUNTRY_CODES } from './tokens/country-code.token';
import { DEFAULT_COUNTRY_CODE } from './tokens/default-country-code.token';
import { isValidPhoneNumber } from 'libphonenumber-js';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PhoneFormComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PhoneFormComponent,
    },
  ],
})
export class PhoneFormComponent
  implements OnInit, OnDestroy, ControlValueAccessor, Validator
{
  public countryCode$: Observable<CountryCode> = new Observable();
  public phoneNumber$: Observable<string> = new Observable();
  public isInvalid$: Observable<boolean> = new Observable();

  private subscription!: Subscription;

  private countryCodeEmitter$: Subject<CountryCode> = new BehaviorSubject(
    this.defaultCountryCode,
  );
  private phoneNumberEmitter$: Subject<string> = new Subject();
  private invalidStatusEmitter$: Subject<boolean> =
    new BehaviorSubject<boolean>(false);

  private onChange: Function = () => {};
  private onTouched: Function = () => {};

  private isTouched: boolean = false;

  constructor(
    @Inject(COUNTRY_CODES) public readonly countryCodes: CountryCode[],
    @Inject(DEFAULT_COUNTRY_CODE)
    public readonly defaultCountryCode: CountryCode,
    private phoneCodePrefixPipe: PhoneCodePrefixPipe,
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.countryCode$ = this.countryCodeEmitter$.asObservable();
    this.phoneNumber$ = this.phoneNumberEmitter$.asObservable();
    this.isInvalid$ = this.invalidStatusEmitter$.asObservable();

    this.subscription = combineLatest([this.countryCode$, this.phoneNumber$])
      .pipe(
        map(([countryCode, phoneNumber]) => {
          return this.getFullPhoneNumber(countryCode, phoneNumber);
        }),
      )
      .subscribe((fullPhoneNumber: string) => {
        this.onChange(fullPhoneNumber);
      });
  }

  writeValue(value: unknown): void {}

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.isTouched) return null;

    const value: string = control.value;
    const isValid: boolean = isValidPhoneNumber(value);

    console.log(value);
    console.log(isValid);

    this.invalidStatusEmitter$.next(!isValid);

    return isValid ? null : { isValid };
  }

  public selectCountry(countryCode: CountryCode): void {
    this.markAsTouched();
    this.countryCodeEmitter$.next(countryCode);
  }

  public changePhoneNumber(value: string): void {
    this.phoneNumberEmitter$.next(value);
  }

  public markAsTouched(): void {
    this.isTouched = true;
    console.log('touched');
    this.onTouched();
  }

  private getFullPhoneNumber(
    countryCode: CountryCode,
    phoneNumber: string,
  ): string {
    const phonePrefix: string = this.phoneCodePrefixPipe.transform(countryCode);
    const rawPhoneNumber: string = this.removeNonDigitChars(phoneNumber);

    return `${phonePrefix}${rawPhoneNumber}`;
  }

  private removeNonDigitChars(value: string): string {
    return value.replace(/\D/g, '');
  }
}
