import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public startText: string = 'Get instantly notify by';
  public textOptions: string[] = ['SMS', 'Email'];
  public typeSpeed: number = 100;
  public initialDelay: number = this.startText.length * this.typeSpeed + 2000;

  constructor() {}
}
