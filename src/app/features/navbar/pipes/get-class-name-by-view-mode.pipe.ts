import { Pipe, PipeTransform } from '@angular/core';
import { NavbarLinksMode } from 'src/app/features/navbar/models/navbar-links-mode.model';

@Pipe({
  name: 'getClassNameByViewMode',
})
export class GetClassNameByViewModePipe implements PipeTransform {
  private readonly classNameByMode: Record<NavbarLinksMode, string> = {
    default: 'navbar-links',
    menu: 'menu',
  };

  transform(value: NavbarLinksMode, ...args: unknown[]): string {
    return this.classNameByMode[value] ?? '';
  }
}
