import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flag',
})
export class FlagPipe implements PipeTransform {
  transform(countryCode: string): string {
    return `./assets/icons/flags/${countryCode.toUpperCase()}.svg`;
  }
}
