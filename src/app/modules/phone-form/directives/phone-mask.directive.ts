import {
  Directive,
  HostListener,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { AsYouType } from 'libphonenumber-js/mobile';
import { CountryCode } from 'src/app/modules/phone-form/models/country-code.model';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective implements OnChanges {
  @Input()
  public countryCode: CountryCode = 'ES';

  @HostListener('ngModelChange', ['$event'])
  onModelChange(value: string) {
    this.onInputChange(value);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: KeyboardEvent) {
    const value: string = (event.target as HTMLInputElement).value;
    this.onBackSpacePressed(value);
  }

  constructor(private ngControl: NgControl) {}

  ngOnChanges(changes: SimpleChanges): void {
    const countryCodeChange: SimpleChange = changes['countryCode'];

    if (!!countryCodeChange && !countryCodeChange.isFirstChange()) {
      const currentValue: string = this.ngControl.value ?? '';
      this.onInputChange(currentValue);
    }
  }

  private onInputChange(value: string): void {
    const digitsValue: string = this.removeNonDigitChars(value);

    const formatter: AsYouType = new AsYouType(this.countryCode);
    const maskedValue = formatter.input(digitsValue);

    this.ngControl.valueAccessor?.writeValue(maskedValue);
  }

  private onBackSpacePressed(value: string): void {
    const digitsValue: string = this.removeNonDigitChars(value);
    this.ngControl.valueAccessor?.writeValue(digitsValue);
  }

  private removeNonDigitChars(value: string): string {
    return value.replace(/\D/g, '');
  }
}
