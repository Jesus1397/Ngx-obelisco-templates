import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDistrictComponent } from './technology-district.component';

describe('TechnologyDistrictComponent', () => {
  let component: TechnologyDistrictComponent;
  let fixture: ComponentFixture<TechnologyDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TechnologyDistrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
