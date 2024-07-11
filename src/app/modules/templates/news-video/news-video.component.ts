import { Component, OnInit } from '@angular/core';
import { OCardModule } from 'ngx-obelisco-example/card';
import { MediaGallery } from 'ngx-obelisco-example/core/models';
import { BreadcrumbService } from 'ngx-obelisco-example/core/services';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { OGalleryModule } from 'ngx-obelisco-example/gallery';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';

@Component({
  selector: 'app-news-video',
  templateUrl: './news-video.component.html',
  styleUrls: ['./news-video.component.scss'],
  standalone: true,
  imports: [
    OFooterModule,
    PageHeaderComponent,
    OCardModule,
    OGalleryModule
  ],
})
export class NewsVideoComponent implements OnInit {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Buenos Aires', route: '/' },
        { name: 'Jefatura de Gabinete', route: '/' },
      ],
      defaultRoute: '/route-default',
    });
  }
  public galleryItems: MediaGallery[] = [
    {
      author: 'Autor 1',
      title: 'Titulo de la imagen 1',
      content: 'Descripcion de la imagen 1',
      src: '../../../../assets/templates/news-video/galeria-1.jpg',
    },
    {
      author: 'Autor 2',
      title: 'Titulo de la imagen 2',
      content: 'Descripcion de la imagen 2',
      src: '../../../../assets/templates/news-video/galeria-1.jpg',
    },
    {
      author: 'Autor 3',
      title: 'Titulo de la imagen 3',
      content: 'Descripcion de la imagen 3',
      src: '../../../../assets/templates/news-video/galeria-2.jpg',
    },
    {
      author: 'Autor 4',
      title: 'Titulo de la imagen 4',
      content: 'Descripcion de la imagen 4',
      src: '../../../../assets/templates/news-video/galeria-3.jpg',
    },
    {
      author: 'Autor 5',
      title: 'Titulo de la imagen 5',
      content: 'Descripcion de la imagen 5',
      src: '../../../../assets/templates/news-video/galeria-4.jpg',
    },
  ];

}
