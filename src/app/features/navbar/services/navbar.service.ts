import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PathLink } from 'src/app/features/navbar/models/path-link.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private readonly links: PathLink[] = [
    {
      name: 'Home',
      path: 'home',
      icon: 'home',
    },
    {
      name: 'Appointment',
      path: 'appointment',
      icon: 'event',
    },
  ];

  constructor() {}

  public getLinks(): Observable<PathLink[]> {
    return of(this.links);
  }
}
