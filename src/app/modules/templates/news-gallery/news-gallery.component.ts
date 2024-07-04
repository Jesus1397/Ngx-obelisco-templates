import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { BreadcrumbService } from 'ngx-obelisco-example/core/services';
import { OGalleryModule } from 'ngx-obelisco-example/gallery';
import { OCardModule } from 'ngx-obelisco-example/card';
import { MediaGallery } from 'ngx-obelisco-example/core/models';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';

@Component({
  selector: 'app-news-gallery',
  templateUrl: './news-gallery.component.html',
  styleUrls: ['./news-gallery.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    OFooterModule,
    PageHeaderComponent,
    OGalleryModule,
    OCardModule,
  ],
})
export class NewsGalleryComponent implements OnInit {
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
      src: '../../../../assets/templates/news-gallery/galeria-1.png',
    },
    {
      author: 'Autor 2',
      title: 'Titulo de la imagen 2',
      content: 'Descripcion de la imagen 2',
      src: '../../../../assets/templates/news-gallery/galeria-2.png',
    },
    {
      author: 'Autor 3',
      title: 'Titulo de la imagen 3',
      content: 'Descripcion de la imagen 3',
      src: '../../../../assets/templates/news-gallery/galeria-3.png',
    },
    {
      author: 'Autor 4',
      title: 'Titulo de la imagen 4',
      content: 'Descripcion de la imagen 4',
      src: '../../../../assets/templates/news-gallery/galeria-1.png',
    },
    {
      author: 'Autor 5',
      title: 'Titulo de la imagen 5',
      content: 'Descripcion de la imagen 5',
      src: '../../../../assets/templates/news-gallery/galeria-2.png',
    },
    {
      author: 'Autor 6',
      title: 'Titulo de la imagen 6',
      content: 'Descripcion de la imagen 6',
      src: '../../../../assets/templates/news-gallery/galeria-3.png',
    },
    {
      author: 'Autor 7',
      title: 'Titulo de la imagen 7',
      content: 'Descripcion de la imagen 7',
      src: '../../../../assets/templates/news-gallery/galeria-1.png',
    },
  ];
}
