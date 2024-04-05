import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-location-climate-weather',
  templateUrl: './location-climate-weather.component.html',
  styleUrl: './location-climate-weather.component.scss'
})
export class LocationClimateWeatherComponent {
  @Input()
  public dark: Boolean;
  @Input()
  public text: string;

  constructor(private weatherService: WeatherService) {
    this.dark = false;
    this.text = '';
  }

}
