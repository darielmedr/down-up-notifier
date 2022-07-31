import { getCountryCallingCode } from 'libphonenumber-js';
import { Pipe, PipeTransform } from '@angular/core';
import { CountryCode } from '../models/country-code.model';

@Pipe({
  name: 'phoneCodePrefix',
})
export class PhoneCodePrefixPipe implements PipeTransform {
  transform(countryCode: CountryCode): string {
    const countryCallingCode: string = getCountryCallingCode(countryCode);
    return `+${countryCallingCode}`;
  }
}
