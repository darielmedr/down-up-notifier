import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CountryCode } from '../../models/country-code.model';

@Component({
  selector: 'app-phone-country-selector',
  templateUrl: './phone-country-selector.component.html',
  styleUrls: ['./phone-country-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneCountrySelectorComponent {
  @Input()
  public selectedCountry?: CountryCode;

  @Input()
  public countryCodes: CountryCode[] = [];

  @Output()
  public readonly selectedCountryChange: EventEmitter<CountryCode> = new EventEmitter();

  constructor() {}

  public countriesTrackByFn(index: number, countryCode: CountryCode): number {
    return index;
  }

  public changeCountry(value: CountryCode): void {
    this.selectedCountryChange.emit(value);
  }
}
