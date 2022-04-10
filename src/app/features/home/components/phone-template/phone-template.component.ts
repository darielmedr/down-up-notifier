import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-template',
  templateUrl: './phone-template.component.html',
  styleUrls: ['./phone-template.component.scss']
})
export class PhoneTemplateComponent implements OnInit {

  public layers: string[] = Array(2);
  public layerDepth: number = 4;

  constructor() { }

  ngOnInit(): void {
    console.log(this.layers.length)
  }

}
