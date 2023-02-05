import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReportManagerComponent} from "@app-modules/reports/report-manager/report-manager.component";


@NgModule({
    imports: [RouterModule.forChild([
        {path: "", component: ReportManagerComponent}
    ])],
    exports: [RouterModule]
})
export class ReportmanagerRoutingModule {
}
