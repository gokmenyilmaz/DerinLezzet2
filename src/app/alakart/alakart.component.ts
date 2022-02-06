import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { AlakartService } from './alakart.service'
import { AlakartMenu } from '../_models/AlakartMenu';
import { AlakartMenuItem } from '../_models/AlakartMenuItem';
import { AppGlobalsService } from "../globals";
import { User } from "../_models/User";
import { AlakartMenuComponent } from './alakart-menu/alakart-menu.component'
import { Observable } from 'rxjs';


@Component({
    moduleId: module.id,
    selector: 'alakart',
    templateUrl: 'alakart.component.html',
    styleUrls: ['alakart.component.css'],
    providers: [AlakartService]
})
export class AlakartComponent implements OnInit {

    _isEditMode: boolean = false;

   

    alakartMenus: AlakartMenu[] = [];

    @ViewChild(AlakartMenuComponent,{static: false})
    private altMenuComponent: AlakartMenu;

    constructor(private alakartService: AlakartService, public globalService: AppGlobalsService) {

        this.setBosAlakartMenus();
    }

    silust(item: any) {
        this.altMenuComponent.AlakartMenuItems = null;
        console.log(this.altMenuComponent);

    }

    menuSilindi(item: AlakartMenu) {
        var inx = this.alakartMenus.indexOf(item);
        this.alakartMenus.splice(inx, 1);
    }

    ngOnInit() {

        this.alakartService.alakartVerileriniGetir()
        .valueChanges()
        .subscribe (data => {
 
            if (data.length==0) {
                    this.alakartMenus = data;
                }
                else {
                    this.setBosAlakartMenus();
                }
        });

            

    }

    setBosAlakartMenus() {
         this.alakartMenus = [];

        let alakartMenuItems1: AlakartMenuItem[] = []; alakartMenuItems1.push(new AlakartMenuItem("0", "", "", ""));
        let alakartMenuItems2: AlakartMenuItem[] = []; alakartMenuItems2.push(new AlakartMenuItem("0", "", "", ""));
        let alakartMenuItems3: AlakartMenuItem[] = []; alakartMenuItems3.push(new AlakartMenuItem("0", "", "", ""));
        let alakartMenuItems4: AlakartMenuItem[] = []; alakartMenuItems4.push(new AlakartMenuItem("0", "", "", ""));
        let alakartMenuItems5: AlakartMenuItem[] = []; alakartMenuItems5.push(new AlakartMenuItem("0", "", "", ""));
        let alakartMenuItems6: AlakartMenuItem[] = []; alakartMenuItems6.push(new AlakartMenuItem("0", "", "", ""));


        let alakartMenu1: AlakartMenu = new AlakartMenu("12.10.2017", "Kahvaltılıklar", 200, alakartMenuItems1);
        let alakartMenu2: AlakartMenu = new AlakartMenu("12.10.2017", "Sandviçler", 200, alakartMenuItems2);
        let alakartMenu3: AlakartMenu = new AlakartMenu("12.10.2017", "Salatalar", 200, alakartMenuItems3);
        let alakartMenu4: AlakartMenu = new AlakartMenu("12.10.2017", "Yemekler", 200, alakartMenuItems4);
        let alakartMenu5: AlakartMenu = new AlakartMenu("12.10.2017", "Tatlılar", 200, alakartMenuItems5);
        let alakartMenu6: AlakartMenu = new AlakartMenu("12.10.2017", "İçecekler", 200, alakartMenuItems6);

        this.alakartMenus.push(alakartMenu1);
        this.alakartMenus.push(alakartMenu2);
        this.alakartMenus.push(alakartMenu3);
        this.alakartMenus.push(alakartMenu4);
        this.alakartMenus.push(alakartMenu5);
        this.alakartMenus.push(alakartMenu6);

    }


    duzenle() {
        this._isEditMode = true;
    }

    kaydet() {
        this.alakartService.alakartVeriKaydet(this.alakartMenus);
        this._isEditMode = false;
    }

}
