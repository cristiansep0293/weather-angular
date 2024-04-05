import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardInformationComponent } from './views/card-information/card-information.component';
import { CardImgWeatherComponent } from './components/card-img-weather/card-img-weather.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { ButtonWeatherComponent } from './components/button-weather/button-weather.component';
import { TemperatureGradesComponent } from './components/temperature-grades/temperature-grades.component';
import { ConditionsWeatherComponent } from './components/conditions-weather/conditions-weather.component';
import { LocationClimateWeatherComponent } from './components/location-climate-weather/location-climate-weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchBoxComponent,
    NavBarComponent,
    CardInformationComponent,
    CardImgWeatherComponent,
    CardImgComponent,
    ButtonWeatherComponent,
    TemperatureGradesComponent,
    ConditionsWeatherComponent,
    LocationClimateWeatherComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    SearchBoxComponent,
    NavBarComponent,
    CardInformationComponent
  ]
})
export class WeatherModule { }
