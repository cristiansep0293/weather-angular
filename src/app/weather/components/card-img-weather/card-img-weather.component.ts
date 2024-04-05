import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-card-img-weather',
  templateUrl: './card-img-weather.component.html',
  styleUrl: './card-img-weather.component.scss'
})
export class CardImgWeatherComponent {

  constructor(private weatherService: WeatherService) { }

  get icon(): string {
    return this.weatherService.weatherInfo.weather.icon;
  }
}
