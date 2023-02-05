import {Component, OnInit} from '@angular/core';
import {LayoutService} from "@app-layout/service/app.layout.service";
import {modules} from "@app-modules/modules";


@Component({
    selector: 'app-menu',
    templateUrl: './skeleton/toolkit/app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = modules;
    }
}
