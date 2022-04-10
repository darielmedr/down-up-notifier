import { Component, Input, OnInit } from '@angular/core';
import { PathLink } from 'src/app/shared/models/path-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  public links: PathLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
