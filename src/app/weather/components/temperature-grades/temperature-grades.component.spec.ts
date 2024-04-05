import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureGradesComponent } from './temperature-grades.component';

describe('TemperatureGradesComponent', () => {
  let component: TemperatureGradesComponent;
  let fixture: ComponentFixture<TemperatureGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureGradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
