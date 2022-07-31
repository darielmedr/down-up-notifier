import { CountryCode } from '../models/country-code.model';
import { PhoneCodePrefixPipe } from './phone-code-prefix.pipe';

describe('PhoneCodePrefixPipe', () => {
  it('should create an instance', () => {
    const pipe = new PhoneCodePrefixPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return country calling code prefix', () => {
    const pipe = new PhoneCodePrefixPipe();

    const countryCode: CountryCode = 'ES';
    const expectedValue: string = '+34';

    const result = pipe.transform(countryCode);

    expect(result).toBe(expectedValue);
  });
});
