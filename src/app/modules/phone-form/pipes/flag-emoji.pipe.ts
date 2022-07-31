import { Pipe, PipeTransform } from '@angular/core';
import { CountryCode } from '../models/country-code.model';

@Pipe({
  name: 'flagEmoji',
})
export class FlagEmojiPipe implements PipeTransform {
  transform(countryCode: CountryCode): string {
    return this.getFlagEmoji(countryCode);
  }

  private getFlagEmoji(countryCode: CountryCode): string {
    const codePoints: number[] = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 0x1f1a5 + char.charCodeAt(0));

    return String.fromCodePoint(...codePoints);
  }
}
