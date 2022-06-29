import { CountryCode } from 'src/app/shared/models/country-code.model';
import { Pipe, PipeTransform } from '@angular/core';

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
