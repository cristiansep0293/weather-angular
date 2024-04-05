import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-conditions-weather',
  templateUrl: './conditions-weather.component.html',
  styleUrl: './conditions-weather.component.scss'
})
export class ConditionsWeatherComponent {
  @Input()
  public dark: Boolean;

  constructor() {
    this.dark = false;
  }
}
