import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { IstatistikBarService } from './istatistik-bar.service'


export class FigureItem {
    constructor(
        public Baslik: string,
        public ResimYol: string,
        public Icerik: string,
    )
    { }
}


@Component({
    moduleId: module.id,
    selector: 'istatistik-bar',
    templateUrl: 'istatistik-bar.component.html',
    styleUrls: ['istatistik-bar.component.css'],
    providers: [IstatistikBarService]
})

export class IstatistikBarComponent implements OnInit {

    istatistik: any = {};

    constructor(private istatistikBarService: IstatistikBarService) {

        this.yukle();

    }

    ngOnInit() {

    }


    yukle() {

        this.istatistikBarService.istatistikGetir("/Istatistik")
        .valueChanges()
        .subscribe(data => {
            this.istatistik.MenuCesitSayisi = data.MenuCesitSayisi;
            this.istatistik.MusteriSayisi = data.MusteriSayisi;
            this.istatistik.UlkeMutfakSayisi = data.UlkeMutfakSayisi;
        });
    }


    kaydet() {
        this.istatistikBarService.kaydet("/Istatistik", this.istatistik);
    }



}