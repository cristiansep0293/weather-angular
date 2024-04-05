import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'weather-button-weather',
  templateUrl: './button-weather.component.html',
  styleUrl: './button-weather.component.scss'
})
export class ButtonWeatherComponent {
  @Input()
  public celsius: Boolean;
  @Output()
  public changeTemperature: EventEmitter<Boolean>;

  constructor() {
    this.celsius = true;
    this.changeTemperature = new EventEmitter();
  }

  public emitChangeTemperature():void {
    this.changeTemperature.emit(this.celsius ? false : true);
  }
}
