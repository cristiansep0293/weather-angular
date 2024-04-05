import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationClimateWeatherComponent } from './location-climate-weather.component';

describe('LocationClimateWeatherComponent', () => {
  let component: LocationClimateWeatherComponent;
  let fixture: ComponentFixture<LocationClimateWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationClimateWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationClimateWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
