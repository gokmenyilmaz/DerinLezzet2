import { Component, OnInit } from '@angular/core'
import { FooterBarService } from './footer-bar.service'
import {Firma} from '../_models/Firma'
import {MesajWeb} from '../_models/MesajWeb'
import {User} from "../_models/User";
import {AppGlobalsService} from "../globals";
import { FormsModule } from '@angular/forms';
declare var google: any;



@Component({
    moduleId: module.id,
    selector: 'footer-bar',
    templateUrl: 'footer-bar.component.html',
    styleUrls: ['footer-bar.component.css'],
    providers: [FooterBarService]
})

export class FooterBarComponent {

    _firma:Firma;
    _isEditMode:boolean=false;
    _user:User;


    constructor(private footerBarService: FooterBarService,public globalService:AppGlobalsService) 
    {
        this.setFirmaDefault();
        
        footerBarService.footerDataGetir()
        .valueChanges()
        .subscribe(data=>{
            if(data!=null){
              
                this._firma=data;  
                this.loadMap();
            }
            else {
                this.setFirmaDefault();
            }

           
           
        });

    }

  

    duzenle(){
        this._isEditMode=true;
    }

    kaydet(){
        
        this.footerBarService.kaydet(this._firma);
        this._isEditMode=false;
       
    }

    setFirmaDefault()
    {
        let mesaj:MesajWeb[]=[];

        this._firma=new Firma("Derin Lezzet X","(532) 541 81 00","mail@saglik.gov.tr","Ankara,tr","X","Y",[]);
        this._firma.GelenMesajlar=mesaj;

    }

    mesajGonder()
    {
        alert("Mesajınız alındı email veya telefon yoluyla size geri dönüş yapılacaktır.")
    }

    loadMap() {
        var mapCanvas = document.getElementById("googleMap");
        var myCenter = new google.maps.LatLng(this._firma.GpsKonumEnlem, this._firma.GpsKonumBoylam);
        var mapOptions = {
            center: myCenter,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: `<p style='text-align:center'>${this._firma.FirmaAd} <br> ${this._firma.Telefon}</p>`
        });
        infowindow.open(map, marker);

    }


}