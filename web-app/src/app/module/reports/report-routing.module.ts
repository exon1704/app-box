import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([{
        path: "manager",
        loadChildren: () => import("@app-modules/reports/report-manager/reportmanager.module").then(m => m.ReportmanagerModule)
    }])],
    exports: [RouterModule]
})
export class ReportRoutingModule {
}
