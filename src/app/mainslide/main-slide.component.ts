import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main-slide',
    templateUrl: 'main-slide.component.html',
    styleUrls: ['main-slide.component.css']

})
export class MainSlideComponent implements OnInit {
    slideItems: any[] = [];
    baslik: string = "";

    constructor() {
        this.baslik = "tanıtım carousel";
    }

    ngOnInit() {
        this.slideItems.push({ 'src': './assets/images/a_guncel/1.jpeg', 'sitil': 'block', "caption": "Ankarada Butik" });
        this.slideItems.push({ 'src': './assets/images/a_guncel/2.jpeg', 'sitil': 'none', "caption": "ev yemekler" });
        this.slideItems.push({ 'src': './assets/images/a_guncel/3.jpeg', 'sitil': 'none', "caption": "herkese" });
    }
}
