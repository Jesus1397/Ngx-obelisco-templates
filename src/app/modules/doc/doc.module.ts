import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { ONavModule } from 'ngx-obelisco-example/nav';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component';

@NgModule({
  declarations: [DocComponent],
  imports: [
    CommonModule,
    DocRoutingModule,
    ONavbarModule,
    ODropdownModule,
    ONavModule,
    PageHeaderComponent,
    InstitutionalBlockComponent,
  ],
})
export class DocModule {}
