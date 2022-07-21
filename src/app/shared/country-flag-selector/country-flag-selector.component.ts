import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { of } from 'rxjs';
import {
  COUNTRIES,
  Country,
} from 'src/app/core/constants/country-phone-codes.constant';
import {
  CountryCode,
  COUNTRY_CODES,
} from 'src/app/shared/models/country-code.model';

@Component({
  selector: 'app-country-flag-selector',
  templateUrl: './country-flag-selector.component.html',
  styleUrls: ['./country-flag-selector.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryFlagSelectorComponent {
  @Input()
  public countryCodes: CountryCode[] = ['AC', 'AD', 'AE', 'AF'];

  @Output()
  public readonly selectedCountry: EventEmitter<CountryCode> = new EventEmitter();

  constructor(@Inject(COUNTRIES) private COUNTRIES: Country[]) {
    console.log('Countries', this.formatCountries(COUNTRIES));
  }

  public countryCodesTrackByFn(
    index: number,
    countryCode: CountryCode,
  ): number {
    return index;
  }

  public countryChange(value: CountryCode): void {
    console.log('>>> Value: ', value);
    this.selectedCountry.emit(value);
  }

  formatCountries(
    countries: {
      name: string;
      Iso: string;
      countryCode: string;
    }[],
  ) {
    const phoneCodesByCountry: any = {};

    countries.forEach((country) => {
      const { Iso: phoneCode, countryCode } = country;

      if (!phoneCodesByCountry[countryCode]) {
        phoneCodesByCountry[countryCode] = {
          phoneCode,
          flagEmoji: this.getFlagEmoji(countryCode as CountryCode),
        };
      }
    });

    return phoneCodesByCountry;
  }

  private getFlagEmoji(countryCode: CountryCode): string {
    const codePoints: number[] = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 0x1f1a5 + char.charCodeAt(0));

    return String.fromCodePoint(...codePoints);
  }
}
