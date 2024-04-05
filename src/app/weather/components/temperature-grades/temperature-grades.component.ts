import { WeatherService } from './../../services/weather.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-temperature-grades',
  templateUrl: './temperature-grades.component.html',
  styleUrl: './temperature-grades.component.scss'
})
export class TemperatureGradesComponent {
  @Input()
  public celsius: Boolean;
  @Input()
  public dark: Boolean;

  constructor(private weatherService: WeatherService) {
    this.celsius = true;
    this.dark = false;
  }

  get gradesTemperatureC(): string {
    return this.weatherService.weatherInfo.temperature.celsius.toFixed(0).toString() + '˚';
  }

  get gradesTemperatureF(): string {
    return this.weatherService.weatherInfo.temperature.farenheit.toFixed(0).toString() + '˚';
  }

}
