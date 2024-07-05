import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentAreasOptionTwoComponent } from './goverment-areas-option-two.component';

describe('GovermentAreasOptionTwoComponent', () => {
  let component: GovermentAreasOptionTwoComponent;
  let fixture: ComponentFixture<GovermentAreasOptionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovermentAreasOptionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovermentAreasOptionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
