import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentAreasOptionOneComponent } from './goverment-areas-option-one.component';

describe('GovermentAreasOptionOneComponent', () => {
  let component: GovermentAreasOptionOneComponent;
  let fixture: ComponentFixture<GovermentAreasOptionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovermentAreasOptionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovermentAreasOptionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
