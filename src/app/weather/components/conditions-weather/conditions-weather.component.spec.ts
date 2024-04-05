import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsWeatherComponent } from './conditions-weather.component';

describe('ConditionsWeatherComponent', () => {
  let component: ConditionsWeatherComponent;
  let fixture: ComponentFixture<ConditionsWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionsWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
