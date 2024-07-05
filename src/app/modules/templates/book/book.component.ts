import { Component, OnInit } from '@angular/core';
import { OBreadcrumbModule } from 'ngx-obelisco-example/breadcrumb';
import { BreadcrumbService } from 'ngx-obelisco-example/core/services';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { OButtonModule } from 'ngx-obelisco-example/button';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  imports: [OBreadcrumbModule, ONavModule, OButtonModule, OFooterModule],
})
export class BookComponent implements OnInit {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Inicio', route: '/' },
        { name: 'Página anterior', route: '/' },
      ],
      defaultRoute: '/route-default',
    });
  }

  public navList = [
    {
      title: 'Adultos y Adolescentes',
      route: '/templates/book',
    },
    {
      title: 'Educación secundaria',
      route: '/doc',
      children: [
        {
          title: 'Adultos 2000',
          route: '/doc',
        },
      ],
    },
    {
      title: 'Supervisiones y sedes',
      route: '/doc',
    },
    {
      title: 'Ventanilla Única de Adultos (VUA)',
      route: '/doc',
    },
    {
      title: 'Contacto',
      route: '/doc',
    },
    {
      title: 'Buscá tu escuela',
      route: '/doc',
    },
  ];
}
