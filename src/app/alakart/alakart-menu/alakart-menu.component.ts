import { Component, ViewChild, Input,Output,EventEmitter , OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AlakartMenu} from '../../_models/AlakartMenu';
import {AlakartMenuItem} from '../../_models/AlakartMenuItem';


@Component({
    moduleId: module.id,
    selector: 'alakart-menu',
    templateUrl: 'alakart-menu.component.html',
    styleUrls: ['alakart-menu.component.css'],
    providers: []
})
export class AlakartMenuComponent {
    @Input() _alakartMenu: AlakartMenu;
    @Input() _isEdit: boolean;

    @Output() _silEventHandler=new EventEmitter<AlakartMenu>();
   
    constructor() {
               
    }

    ngOnInit() {
        
    }

    sil(item:AlakartMenu)
    {
        this._silEventHandler.emit(this._alakartMenu);
    }
    satirEkle(item:AlakartMenu)
    {
        let menuItem=new AlakartMenuItem("0","","","");
        item.AlakartMenuItems.push(menuItem);
    }

    satirSil(itemList:AlakartMenuItem[],item:AlakartMenuItem)
    {
       this.removeFromArray(itemList,item);
    }

    removeFromArray(list:any, value:any) {
        var idx = list.indexOf(value);
        if (idx !== -1) {
            list.splice(idx, 1);
        }
    }

}
