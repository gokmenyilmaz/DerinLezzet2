import { Component,Input,OnInit,ElementRef,AfterViewInit,ViewChild } from '@angular/core';
import { HaftalikMenuService } from './haftalik-menu.service'
import {AppGlobalsService} from "../globals";

import {YemekMenuGun} from "../_models/YemekMenuGun";
import {YemekMenuItem} from "../_models/YemekMenuItem";
import {KeyValue} from "../_models/KeyValue";
import {User} from "../_models/User";




@Component({
    moduleId: module.id,
    selector: 'haftalik-menu',
    templateUrl: 'haftalik-menu.component.html',
    styleUrls: ['haftalik-menu.component.css'],
    providers: [HaftalikMenuService]
})

export class HaftalikMenuComponent {
    @Input() MenuAd:string;
    @Input() AnaBaslik:string;

    @ViewChild('modal02',{static: false}) modalForm: ElementRef;

    aktifResimYol:string="";
    aktifResimAciklama:string="";

    aktifHaftaVerisiVarmi:boolean;

    readonly MAX_YEMEKGUN_SAYISI: number=7;

    readonly gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    readonly aylar = [
        { id: 0, value: "Ay Seçiniz" },
        { id: 1, value: "Ocak" }, { id: 2, value: "Şubat" }, { id: 3, value: "Mart" }, { id: 4, value: "Nisan" }, { id: 5, value: "Mayıs" }, { id: 6, value: "Haziran" },
        { id: 7, value: "Temmuz" }, { id: 8, value: "Ağustos" }, { id: 9, value: "Eylül" }, { id: 10, value: "Ekim" }, { id: 11, value: "Kasım" }, { id: 12, value: "Aralık" },
    ];

    YemekMenuGunListe: YemekMenuGun[] = [];
    yil: number;
    ay_onikili: number;
    pazartesiKey: number;
    ay_pazartesiler: KeyValue[] = [];

     _isEditMode:boolean=false;

  
    constructor(private haftalikMenuService: HaftalikMenuService,public globalService:AppGlobalsService) {
    }

    ngOnInit()
    {
       this.varsayilanTarihAyarla(new Date());
        this.haftalikMenuleriYukle();
    }

    varsayilanTarihAyarla(d:Date) {
        this.yil = d.getFullYear();
        this.ay_onikili = d.getMonth() + 1;
        this.ay_pazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili)

        if(d.getDate()< Number(this.ay_pazartesiler[0].value)) {
             let oncekiAy_onikili= this.ay_onikili-1;
      

             if(oncekiAy_onikili==0) oncekiAy_onikili=12;

             this.ay_onikili=oncekiAy_onikili;

             if(this.ay_onikili<oncekiAy_onikili) {this.yil=this.yil-1;}



             var oncekiAyPazartesiler = this.getAyPazartesiler(this.yil, oncekiAy_onikili);
             
             this.pazartesiKey =Number(oncekiAyPazartesiler[oncekiAyPazartesiler.length-1].value);
        }
        else{
             this.pazartesiKey = this.getirPazartesiKeyGunden(d);
        }

    }

    tarihDegisti() {
        this.ay_pazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili);
        this.pazartesiKey = -1;

        this.haftalikMenuleriYukle();

    }
    
    gunDegisti() {
        this.haftalikMenuleriYukle();
    }

   

    haftalikMenuleriYukle() {
        this.YemekMenuGunListe = [];

        if (this.pazartesiKey == -1) return;

        this.haftalikMenuService
        .haftaVerileriniGetir(this.MenuAd,this.yil, this.ay_onikili, this.pazartesiKey)
        .valueChanges()
        .subscribe(data => {

            if (data.length==0) {
                this.setBosYemekMenuItems();
                return;
            }

            console.log(data)
           
            this.YemekMenuGunListe = data;
            

            this.aktifHaftaVerisiVarmi= this.YemekMenuGunListe.filter(c=>c.ToplamFiyat!=0).length>0;

           
        });
    }


    getirPazartesiKeyGunden(d:Date):number{
      
       var day = d.getDay(),
       diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
       return new Date(d.setDate(diff)).getDate();
    }

    
    setBosYemekMenuItems() {
        this.YemekMenuGunListe = [];

        for (let g = 0; g < 5; g++) {
            let tarih = new Date();
            tarih.setFullYear(this.yil, this.ay_onikili - 1, this.pazartesiKey + g);

            let gun = new YemekMenuGun(tarih.toLocaleDateString("tr-TR"), this.gunler[tarih.getDay() - 1],false,true,0, [],"","","",[],20);

            for (let i = 0; i < 5; i++) {
                gun.YemekMenuItems.push(new YemekMenuItem("0", ""));
            }

            this.YemekMenuGunListe.push(gun);
        }
    }

    getAyPazartesiler(_yil: number, _ay_onikili: number) {
        let _ay = _ay_onikili - 1;
        let _ptList: KeyValue[] = [];

        let _gunSayisi = new Date(_yil, _ay + 1, 0).getDate(); //bir sonraki ayın 0 ıncı günü gün sayısını verir. Okunabilirlik açısından böyle yazıldı

        if (_ay == -1) return _ptList;

        for (let i: number = 1; i <= _gunSayisi; i++) {
            var gun = new Date(_yil, _ay, i).getDay();
            if (gun == 1) _ptList.push(new KeyValue(i, i.toString()));

        }

        return _ptList;
    }

    yeniSatirEkle(m:YemekMenuGun)
    {
        let _yeniYemekMenuItem=new YemekMenuItem("0", "")
        m.YemekMenuItems.push(_yeniYemekMenuItem);
    }

    yeniSatirEkleSalata(m:YemekMenuGun)
    {
        let _yeniYemekMenuItem=new YemekMenuItem("0", "")

        if(m.SalataMenuItems==undefined) m.SalataMenuItems=[];

        m.SalataMenuItems.push(_yeniYemekMenuItem);
    }


    satirSil(m:YemekMenuGun,i:YemekMenuItem)
    {
        this.removeFromArray(m,i);
    }

    satirSilSalata(m:YemekMenuGun,i:YemekMenuItem)
    {
        this.removeFromArraySalata(m,i);
    }

    removeFromArray(m:YemekMenuGun, value:any) {
        var idx = m.YemekMenuItems.indexOf(value);
        if (idx !== -1) {
            m.YemekMenuItems.splice(idx, 1);
        }
        return m.YemekMenuItems;
    }

    removeFromArraySalata(m:YemekMenuGun, value:any) {
        var idx = m.SalataMenuItems.indexOf(value);
        if (idx !== -1) {
            m.SalataMenuItems.splice(idx, 1);
        }
        return m.SalataMenuItems;
    }


    changeListener($event,m:YemekMenuGun) : void {
        this.readThis($event.target,m);
    }
      
    readThis(inputValue: any,m:YemekMenuGun): void {
        // var file:File = inputValue.files[0];
        // var myReader:FileReader = new FileReader();
      
        // myReader.onloadend = (e) => {
        //   m.image = myReader.result;
        // }
        // myReader.readAsDataURL(file);
    }
  
    duzenle(){
        this._isEditMode= !this._isEditMode;
    }

    kaydet() {
        this.haftalikMenuService.haftaVeriKaydet(this.MenuAd,this.yil, this.ay_onikili, this.pazartesiKey, this.YemekMenuGunListe);
        this._isEditMode=false;
    }


    resmiBuyut(m:YemekMenuGun)
    {
        this.aktifResimYol=m.image;
        this.aktifResimAciklama=m.Aciklama;
        this.modalForm.nativeElement.style.display = "block";
    }

    closeModal() {
        this.modalForm.nativeElement.style.display = "none";

    }

    sutunSitilSinifGetir()
    {
        var sinifDizi=[];
        var fiyatGiriliSayi= this.YemekMenuGunListe.filter(c=>c.ToplamFiyat!=0).length;
       
       if(fiyatGiriliSayi==1 || fiyatGiriliSayi==2) sinifDizi.push("l6");
       if(fiyatGiriliSayi==3) sinifDizi.push("l4");
       if(fiyatGiriliSayi==4) sinifDizi.push("l6");
       if(fiyatGiriliSayi==5) sinifDizi.push("l4");

       return sinifDizi;
    


    }

}