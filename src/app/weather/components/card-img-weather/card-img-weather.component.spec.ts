import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImgWeatherComponent } from './card-img-weather.component';

describe('CardImgWeatherComponent', () => {
  let component: CardImgWeatherComponent;
  let fixture: ComponentFixture<CardImgWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardImgWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardImgWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
