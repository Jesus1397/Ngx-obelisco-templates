import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsVideoComponent } from './news-video.component';

describe('NewsVideoComponent', () => {
  let component: NewsVideoComponent;
  let fixture: ComponentFixture<NewsVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
