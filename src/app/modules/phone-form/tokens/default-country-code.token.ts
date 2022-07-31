import { InjectionToken } from '@angular/core';
import { CountryCode } from '../models/country-code.model';

const defaultCountryCode: CountryCode = 'ES';

export const DEFAULT_COUNTRY_CODE: InjectionToken<CountryCode> =
  new InjectionToken('Default Country Code selected', {
    providedIn: 'root',
    factory: () => defaultCountryCode,
  });
