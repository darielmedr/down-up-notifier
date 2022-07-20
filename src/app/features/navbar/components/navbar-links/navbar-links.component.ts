import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PathLink } from 'src/app/features/navbar/models/path-link.model';
import { NavbarLinksMode } from 'src/app/features/navbar/models/navbar-links-mode.model';

@Component({
  selector: 'app-navbar-links',
  templateUrl: './navbar-links.component.html',
  styleUrls: ['./navbar-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinksComponent {
  @Input()
  public links: PathLink[] = [];
  @Input()
  public mode: NavbarLinksMode = 'default';
  @Input()
  public openMenu: boolean = false;

  @Output()
  public readonly closeMenu: EventEmitter<void> = new EventEmitter();

  constructor() {}

  public linksTrackByFn(index: number, link: PathLink): string {
    return link.name;
  }

  public close(): void {
    this.closeMenu.emit();
  }
}
