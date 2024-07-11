import { Component, OnInit } from '@angular/core';
import { OBreadcrumbModule } from 'ngx-obelisco-example/breadcrumb';
import { OCollapseModule } from 'ngx-obelisco-example/collapse';
import { BreadcrumbService } from 'ngx-obelisco-example/core/services';
import { OFooterModule } from 'ngx-obelisco-example/footer';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  standalone: true,
  imports: [OBreadcrumbModule, OCollapseModule, OFooterModule],
})
export class SimpleComponent implements OnInit {
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
}
