import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGalleryComponent } from './news-gallery.component';

describe('NewsGalleryComponent', () => {
  let component: NewsGalleryComponent;
  let fixture: ComponentFixture<NewsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
