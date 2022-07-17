import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-template',
  templateUrl: './phone-template.component.html',
  styleUrls: ['./phone-template.component.scss'],
})
export class PhoneTemplateComponent {
  public layers: string[] = Array(4);
  public layerDepth: number = 4;

  constructor() {}

  public layersTrackBy(index: number, layer: string): number {
    return index;
  }
}
