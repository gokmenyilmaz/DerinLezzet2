import { Component, OnInit } from '@angular/core';
import { MainSlideComponent } from '../mainslide/main-slide.component';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { HakkimizdaComponent } from '../hakkimizda/hakkimizda.component';
import { HaftalikMenuComponent } from '../haftalikmenu/haftalik-menu.component';
import { EkipmanComponent } from '../ekipmanlar/ekipman.component';
import {AppGlobalsService} from "../globals";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: []
})
export class HomeComponent implements OnInit {

    constructor(public globalService:AppGlobalsService) {
    }

    ngOnInit() {

    }


}
