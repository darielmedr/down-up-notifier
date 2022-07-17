import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flag',
})
export class FlagPipe implements PipeTransform {
  transform(countryCode: string): string {
    console.log('fetching flag image of: ', countryCode);
    return `./assets/icons/flags/${countryCode.toUpperCase()}.svg`;
  }
}
