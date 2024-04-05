import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-card-information',
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.scss'
})
export class CardInformationComponent {
  @Input()
  public dark: Boolean;
  public celsius: Boolean;

  constructor(private weatherService: WeatherService) {
    this.dark = false;
    this.celsius = true;
  }

  get location(): string {
    return this.weatherService.weatherInfo.city + ', ' + this.weatherService.weatherInfo.country;
  };

  get weatherText(): string {
    return this.weatherService.weatherInfo.weather.description.toUpperCase();
  };

  public changeTemperature(celsius: Boolean):void {
    this.celsius = celsius;
  }
}
