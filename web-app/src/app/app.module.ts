import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AppLayoutModule} from "@app-layout/skeleton/toolkit/app.layout.module";
import {NotfoundComponent} from "@app-pages/notfound/notfound.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
