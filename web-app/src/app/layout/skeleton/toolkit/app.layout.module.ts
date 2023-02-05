import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {BadgeModule} from 'primeng/badge';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RippleModule} from 'primeng/ripple';
import {AppMenuitemComponent} from "@app-layout/skeleton/toolkit/app.menuitem.component";
import {AppSidebarComponent} from "@app-layout/skeleton/sidebar/app.sidebar.component";
import {RouterModule} from "@angular/router";
import {AppFooterComponent} from "@app-layout/skeleton/footer/app.footer.component";
import {AppConfigModule} from "@app-layout/config/config.module";
import {AppMenuComponent} from "@app-layout/app.menu.component";
import {AppTopBarComponent} from "@app-layout/skeleton/topbar/app.topbar.component";
import {AppLayoutComponent} from "@app-layout/skeleton/toolkit/app.layout.component";


@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule {
}
