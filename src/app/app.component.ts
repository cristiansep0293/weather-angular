import { Component, OnInit, SimpleChanges } from '@angular/core';
import { getCoordinates } from './util/util';
import { WeatherService } from './weather/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title:string;
  public dark: Boolean;
  public loading: Boolean;

  constructor(private weatherService: WeatherService) {
    this.title = 'Weather App';
    this.dark = false;
    this.loading = true;
  }

  ngOnInit(): void {
    this.getCoords();
  }

  public async getCoords():Promise<void> {
    await getCoordinates().then(res => {
      if (res) {
        let coords = {
          latitude: res!.latitude,
          longitude: res!.longitude
        };
        this.weatherService.getCurrentWheter(coords);
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    });
  }

  public changeTheme(dark: Boolean):void {
    this.dark = dark;
  }

  public isLoading(loading: Boolean): void {
    this.loading = loading;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
