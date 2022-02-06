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
var haftalik_menu_service_1 = require("./haftalik-menu.service");
var globals_1 = require("../globals");
var YemekMenuGun_1 = require("../_models/YemekMenuGun");
var YemekMenuItem_1 = require("../_models/YemekMenuItem");
var KeyValue_1 = require("../_models/KeyValue");
var HaftalikMenuComponent = (function () {
    function HaftalikMenuComponent(haftalikMenuService, globalService) {
        this.haftalikMenuService = haftalikMenuService;
        this.globalService = globalService;
        this.gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
        this.aylar = [
            { id: 0, value: "Ay Seçiniz" },
            { id: 1, value: "Ocak" }, { id: 2, value: "Şubat" }, { id: 3, value: "Mart" }, { id: 4, value: "Nisan" }, { id: 5, value: "Mayıs" }, { id: 6, value: "Haziran" },
            { id: 7, value: "Temmuz" }, { id: 8, value: "Ağustos" }, { id: 9, value: "Eylül" }, { id: 10, value: "Ekim" }, { id: 11, value: "Kasım" }, { id: 12, value: "Aralık" },
        ];
        this.YemekMenuGunListe = [];
        this.ay_pazartesiler = [];
        this._isEditMode = false;
        this.varsayilanTarihAyarla();
        this.yukle();
    }
    HaftalikMenuComponent.prototype.varsayilanTarihAyarla = function () {
        var d = new Date();
        this.yil = d.getFullYear();
        this.ay_onikili = d.getMonth() + 1;
        this.ay_pazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili);
        var ptGun = d.getDate() - d.getDay() + 1;
        this.pazartesiKey = ptGun;
    };
    HaftalikMenuComponent.prototype.yukle = function () {
        var _this = this;
        this.YemekMenuGunListe = [];
        if (this.pazartesiKey == -1)
            return;
        this.haftalikMenuService.haftaVerileriniGetir(this.yil, this.ay_onikili, this.pazartesiKey).subscribe(function (data) {
            _this.YemekMenuGunListe = data;
            if (data.$exists() == false) {
                _this.setBosYemekMenuItems();
            }
        });
    };
    HaftalikMenuComponent.prototype.setBosYemekMenuItems = function () {
        this.YemekMenuGunListe = [];
        for (var g = 0; g < 5; g++) {
            var tarih = new Date();
            tarih.setFullYear(this.yil, this.ay_onikili - 1, this.pazartesiKey + g);
            var gun = new YemekMenuGun_1.YemekMenuGun(tarih.toLocaleDateString(), this.gunler[tarih.getDay() - 1], false, true, 0, []);
            for (var i = 0; i < 5; i++) {
                gun.YemekMenuItems.push(new YemekMenuItem_1.YemekMenuItem("0", ""));
            }
            this.YemekMenuGunListe.push(gun);
        }
    };
    HaftalikMenuComponent.prototype.tarihDegisti = function () {
        this.ay_pazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili);
        this.pazartesiKey = -1;
        this.yukle();
    };
    HaftalikMenuComponent.prototype.gunDegisti = function () {
        this.yukle();
    };
    HaftalikMenuComponent.prototype.kaydet = function () {
        this.haftalikMenuService.haftaVeriKaydet(this.yil, this.ay_onikili, this.pazartesiKey, this.YemekMenuGunListe);
        this._isEditMode = false;
    };
    HaftalikMenuComponent.prototype.getAyPazartesiler = function (_yil, _ay_onikili) {
        var _ay = _ay_onikili - 1;
        var _ptList = [];
        var _gunSayisi = new Date(_yil, _ay + 1, 0).getDate(); //bir sonraki ayın 0 ıncı günü gün sayısını verir. Okunabilirlik açısından böyle yazıldı
        if (_ay == -1)
            return _ptList;
        for (var i = 1; i <= _gunSayisi; i++) {
            var gun = new Date(_yil, _ay, i).getDay();
            if (gun == 1)
                _ptList.push(new KeyValue_1.KeyValue(i, i.toString()));
        }
        return _ptList;
    };
    HaftalikMenuComponent.prototype.duzenle = function () {
        this._isEditMode = true;
    };
    HaftalikMenuComponent.prototype.yeniSatirEkle = function (m) {
        var _yeniYemekMenuItem = new YemekMenuItem_1.YemekMenuItem("0", "");
        m.YemekMenuItems.push(_yeniYemekMenuItem);
    };
    HaftalikMenuComponent.prototype.satirSil = function (m, i) {
        this.removeFromArray(m, i);
    };
    HaftalikMenuComponent.prototype.removeFromArray = function (m, value) {
        var idx = m.YemekMenuItems.indexOf(value);
        if (idx !== -1) {
            m.YemekMenuItems.splice(idx, 1);
        }
        return m.YemekMenuItems;
    };
    return HaftalikMenuComponent;
}());
HaftalikMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'haftalik-menu',
        templateUrl: 'haftalik-menu.component.html',
        styleUrls: ['haftalik-menu.component.css'],
        providers: [haftalik_menu_service_1.HaftalikMenuService]
    }),
    __metadata("design:paramtypes", [haftalik_menu_service_1.HaftalikMenuService, globals_1.AppGlobalsService])
], HaftalikMenuComponent);
exports.HaftalikMenuComponent = HaftalikMenuComponent;
//# sourceMappingURL=haftalik-menu.component.js.map