import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTemplatesRoutingModule } from './section-templates-routing.module';
import { SectionTemplatesComponent } from './section-templates.component';
import { OAccessModule } from 'ngx-obelisco-example/access';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OCardModule } from 'ngx-obelisco-example/card';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { ONavModule } from 'ngx-obelisco-example/nav';

@NgModule({
  declarations: [SectionTemplatesComponent],
  imports: [
    CommonModule,
    SectionTemplatesRoutingModule,
    OAccessModule,
    ONavbarModule,
    OCardModule,
    PageHeaderComponent,
    ONavModule,
    ODropdownModule,
  ],
})
export class SectionTemplatesModule {}
