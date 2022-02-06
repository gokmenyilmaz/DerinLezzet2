import { Component, OnInit } from '@angular/core';
import { EkipmanService } from './ekipman.service'

@Component({
    moduleId: module.id,
    selector: 'ekipman',
    templateUrl: 'ekipman.component.html',
    styleUrls: ['ekipman.component.css'],
    providers: [EkipmanService]
})

export class EkipmanComponent {

    slideItemsKisiyeOzel: any[] = [];
    slideItemsFirmayaOzel: any[] = [];
    baslik: string = "";

    constructor() {
        this.baslik = "tanıtım carousel";
    }

    ngOnInit() {
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/1.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/2.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/3.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/4.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/5.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/6.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': './assets/images/ekipmanlar/kisiyeozel/7.jpg', 'sitil': 'none', "caption": "" });

        this.slideItemsFirmayaOzel.push({ 'src': './assets/images/ekipmanlar/firmayaozel/1.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': './assets/images/ekipmanlar/firmayaozel/2.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': './assets/images/ekipmanlar/firmayaozel/3.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': './assets/images/ekipmanlar/firmayaozel/4.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': './assets/images/ekipmanlar/firmayaozel/5.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': './assets/images/ekipmanlar/firmayaozel/6.jpg', 'sitil': 'none', "caption": "" });
    }



}