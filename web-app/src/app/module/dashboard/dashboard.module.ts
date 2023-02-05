import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardsRoutingModule} from "@app-modules/dashboard/dashboard-routing.module";
import {DashboardComponent} from "@app-modules/dashboard/dashboard.component";

@NgModule({
    imports: [CommonModule, FormsModule, DashboardsRoutingModule], declarations: [DashboardComponent]
})
export class DashboardModule {
}
