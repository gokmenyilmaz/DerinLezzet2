import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ResimGaleriService } from './resim-galeri.service'
import { Observer } from 'rxjs';
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
    selector: 'resim-galeri',
    templateUrl: 'resim-galeri.component.html',
    styleUrls: ['resim-galeri.component.css'],
    providers: [ResimGaleriService]
})

export class ResimGaleriComponent implements OnInit {

    FigureList: FigureItem[] = [];

    aktifResimYol: string = "";
    AktifResimIcerik: string = "";
    aktifResimBaslik: string = "";

    aktiveImageIndex: number = 0;

    @ViewChild('modal01', {static: false}) modalForm: ElementRef;

    constructor(private resimGaleriService: ResimGaleriService) {

        this.yukle();
    }

    ngOnInit() {



    }


    yukle() {
        this.FigureList = [];


        this.resimGaleriService.resimleriGetir("/ResimGaleri/Genel")
        .valueChanges()
        .subscribe(data => {
            this.FigureList = data;
            this.FigureList.map(c=>{c.ResimYol=c.ResimYol.replace("/gorseller/","/gorseller/thumb/").replace("assets","./assets");return c;});

        });
    }


    kaydet() {
        this.resimGaleriService.kaydet("/ResimGaleri/Genel", this.FigureList);
    }


    showModal(item: any) {
        this.modalForm.nativeElement.style.display = "block";
        this.aktiveImageIndex = this.FigureList.indexOf(item);

        this.loadImagesFromIndex(this.aktiveImageIndex);
    }

    closeModal() {
        this.modalForm.nativeElement.style.display = "none";

    }

    leftClick($event: MouseEvent) {

        $event.stopPropagation();
        if (this.aktiveImageIndex == 0) return;
        this.aktiveImageIndex--;

        this.loadImagesFromIndex(this.aktiveImageIndex);

    }

    rightClick($event: MouseEvent) {

        $event.stopPropagation();

        if (this.aktiveImageIndex == this.FigureList.length - 1) return;
        this.aktiveImageIndex++;

        this.loadImagesFromIndex(this.aktiveImageIndex);
    }

    loadImagesFromIndex(i: number) {
        this.aktifResimYol = this.FigureList[i].ResimYol.replace("thumb","big").replace("assets","./assets");

    }

}