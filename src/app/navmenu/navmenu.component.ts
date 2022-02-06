import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {AppGlobalsService} from "../globals";

@Component(
    {
        moduleId: module.id,
        selector: 'nav-menu',
        templateUrl: 'navmenu.component.html',
        styleUrls: ['navmenu.component.css']
    })

export class NavmenuComponent {

    public userPhoto:string;

    @ViewChild('smallMenu', {static: false}) smallMenu: ElementRef;

 
    constructor(public globalService:AppGlobalsService)
    {
      
    }

    signInWithGoogle()
    {
        this.globalService.signInWithGoogle()
    }

    openSmallMenu()
    {

        var isBlock=this.smallMenu.nativeElement.style.display=="block";

        if(!isBlock)
            this.smallMenu.nativeElement.style.setProperty("display","block","important");
        else
            this.smallMenu.nativeElement.style.setProperty("display","none","important");
       
     
    }

    closeSmallMenu()
    {
        this.smallMenu.nativeElement.style.setProperty("display","none","important");
    }
   
}

