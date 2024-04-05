import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-card-img',
  templateUrl: './card-img.component.html',
  styleUrl: './card-img.component.scss'
})
export class CardImgComponent {
  @Input()
  public dark: Boolean;

  constructor() {
    this.dark = false;
  }
}
