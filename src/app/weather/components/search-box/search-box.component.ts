import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Input()
  public dark: Boolean;
  @ViewChild('txtCity')
  public txtCity: ElementRef<HTMLInputElement> = {} as ElementRef;
  @Output()
  public loadingEmit: EventEmitter<Boolean>

  constructor(private weatherService: WeatherService) {
    this.dark = false;
    this.loadingEmit = new EventEmitter();
  }

  public searchCurrentWheterByCity(): void {
    this.weatherService.getCurrentWheterByCity(this.txtCity.nativeElement.value);
    this.loadingEmit.emit(true);
  }

}
