import { Component, Input } from '@angular/core';
import { PathLink } from 'src/app/shared/models/path-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input()
  public links: PathLink[] = [];

  constructor() {}

  public linksTrackBy(index: number, link: PathLink): number {
    return index;
  }
}
