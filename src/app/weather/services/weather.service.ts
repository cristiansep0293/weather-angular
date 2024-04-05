import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherInfo } from '../interfaces/weatherInfo.interface';
import { WeatherInfoResponse } from '../interfaces/responseWeather.interface';
import { getIconById, kelvinToCelcius, kelvinToFarenheit } from '../../util/util';
import { Coordinates } from '../interfaces/coordinates.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL: string;
  private weatherData: weatherInfo | null;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.openweathermap.org/data/2.5/weather';
    this.weatherData = null;
  }

  public get weatherInfo(): weatherInfo {
    return this.weatherData!;
  }

  private executeWeatherServiceSearch(params: HttpParams): weatherInfo {
    this.http.get<WeatherInfoResponse>(this.URL, { params }).subscribe(
      data => {
        this.weatherData = {
          country: data.sys.country,
          city: data.name,
          weather: {
            main: data.weather[0].main,
            description: data.weather[0].description,
            icon: getIconById(data.weather[0].icon),
          },
          temperature: {
            kelvin: data.main.temp,
            celsius: kelvinToCelcius(data.main.temp),
            farenheit: kelvinToFarenheit(data.main.temp),
          },
        };
      });

      return this.weatherData!;
  }

  public getCurrentWheterByCity(city: string): weatherInfo {
    let params: HttpParams = new HttpParams()
    .set('appid','73575ab9b9ade89173b4bf96af80e858')
    .set('q', city);
    return this.executeWeatherServiceSearch(params);
  }

  public getCurrentWheter(coords: Coordinates): weatherInfo {
    let params: HttpParams = new HttpParams()
      .set('appid','73575ab9b9ade89173b4bf96af80e858')
      .set('lat', coords.latitude)
      .set('lon', coords.longitude);
    return this.executeWeatherServiceSearch(params);
  }

}
