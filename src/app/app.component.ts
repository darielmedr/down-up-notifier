import { Component } from '@angular/core';
import { PathLink } from './shared/models/path-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public links: PathLink[] = [
    {
      name: 'Home',
      path: 'home',
      icon: 'home',
    },
    {
      name: 'Subscribe',
      path: 'subscription',
      icon: 'notifications_active',
    },
  ];

  constructor() {}
}
