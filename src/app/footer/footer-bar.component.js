"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var footer_bar_service_1 = require("./footer-bar.service");
var Firma_1 = require("../_models/Firma");
var globals_1 = require("../globals");
var FooterBarComponent = (function () {
    function FooterBarComponent(footerBarService, globalService) {
        var _this = this;
        this.footerBarService = footerBarService;
        this.globalService = globalService;
        this._isEditMode = false;
        this.setFirmaDefault();
        footerBarService.footerDataGetir().subscribe(function (data) {
            if (data.$exists()) {
                _this._firma = data;
                _this.loadMap();
            }
            else {
                _this.setFirmaDefault();
            }
        });
    }
    FooterBarComponent.prototype.duzenle = function () {
        this._isEditMode = true;
    };
    FooterBarComponent.prototype.kaydet = function () {
        this.footerBarService.kaydet(this._firma);
        this._isEditMode = false;
    };
    FooterBarComponent.prototype.setFirmaDefault = function () {
        var mesaj = [];
        this._firma = new Firma_1.Firma("Derin Lezzet X", "(532) 541 81 00", "mail@saglik.gov.tr", "Ankara,tr", "X", "Y", []);
        this._firma.GelenMesajlar = mesaj;
    };
    FooterBarComponent.prototype.mesajGonder = function () {
        alert("Mesajınız alındı email veya telefon yoluyla size geri dönüş yapılacaktır.");
    };
    FooterBarComponent.prototype.loadMap = function () {
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
            content: "<p style='text-align:center'>" + this._firma.FirmaAd + " <br> " + this._firma.Telefon + "</p>"
        });
        infowindow.open(map, marker);
    };
    return FooterBarComponent;
}());
FooterBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'footer-bar',
        templateUrl: 'footer-bar.component.html',
        styleUrls: ['footer-bar.component.css'],
        providers: [footer_bar_service_1.FooterBarService]
    }),
    __metadata("design:paramtypes", [footer_bar_service_1.FooterBarService, globals_1.AppGlobalsService])
], FooterBarComponent);
exports.FooterBarComponent = FooterBarComponent;
//# sourceMappingURL=footer-bar.component.js.map