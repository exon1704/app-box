import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from "@app-layout/skeleton/toolkit/app.layout.component";
import {NotfoundComponent} from "@app-pages/notfound/notfound.component";

@NgModule({
    imports: [RouterModule.forRoot([{
        path: '', component: AppLayoutComponent, children: [{
            path: '', loadChildren: () => import("app/module/dashboard/dashboard.module").then(m => m.DashboardModule)
        },]
    }, {path: 'notfound', component: NotfoundComponent}, {
        path: '**', redirectTo: '/notfound'
    },], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
