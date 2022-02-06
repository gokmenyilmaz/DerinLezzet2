import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: "my-w3carousel",
    templateUrl: "carousel.component.html",
    styleUrls: ["carousel.component.css"]

})

export class MyW3CarouselComponent implements OnInit {


    @Input() saniye: number;
    @Input() buttons: string;
    @ViewChild('dataContainer', {static: false}) dataContainer: ElementRef;
    @ViewChild('dotContainer', {static: false}) dotContainer: ElementRef;


    displayItems: any[] = [];
    indexItem: number = 0;
    dotItems: any[] = [];


    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.displayItems = this.dataContainer.nativeElement.querySelectorAll('ul>li');
        this.dotItems = this.dotContainer.nativeElement.querySelectorAll('.carousel-dots span');

        this.displayItems[0].classList.add("current");

        setInterval(() => { this.carousel(this.indexItem += 1); }, this.saniye);

    }

    plusDivs(i: number) {
        this.carousel(this.indexItem += i);
    }
    carousel(indexItem: number) {
        if (this.indexItem > this.displayItems.length - 1) { this.indexItem = 0 }
        if (this.indexItem < 0) { this.indexItem = this.displayItems.length - 1 }

        for (let item of this.displayItems) {
            item.classList.remove("current");
        }

        for (let item of this.dotItems) {
           // item.classList.remove("current");
        }


        this.displayItems[this.indexItem].classList.add("current");
       // this.dotItems[this.indexItem].classList.add("current");

    }


}