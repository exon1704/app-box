import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportmanagerRoutingModule } from './reportmanager-routing.module';
import { ReportManagerComponent } from './report-manager.component';


@NgModule({
  declarations: [
    ReportManagerComponent
  ],
  imports: [
    CommonModule,
    ReportmanagerRoutingModule
  ]
})
export class ReportmanagerModule { }
