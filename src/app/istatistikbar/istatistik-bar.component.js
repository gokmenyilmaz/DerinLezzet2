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
var istatistik_bar_service_1 = require("./istatistik-bar.service");
var FigureItem = (function () {
    function FigureItem(Baslik, ResimYol, Icerik) {
        this.Baslik = Baslik;
        this.ResimYol = ResimYol;
        this.Icerik = Icerik;
    }
    return FigureItem;
}());
exports.FigureItem = FigureItem;
var IstatistikBarComponent = (function () {
    function IstatistikBarComponent(istatistikBarService) {
        this.istatistikBarService = istatistikBarService;
        this.istatistik = {};
        this.yukle();
    }
    IstatistikBarComponent.prototype.ngOnInit = function () {
    };
    IstatistikBarComponent.prototype.yukle = function () {
        var _this = this;
        this.istatistikBarService.istatistikGetir("/Istatistik").subscribe(function (data) {
            _this.istatistik.MenuCesitSayisi = data.MenuCesitSayisi;
            _this.istatistik.MusteriSayisi = data.MusteriSayisi;
            _this.istatistik.UlkeMutfakSayisi = data.UlkeMutfakSayisi;
        });
    };
    IstatistikBarComponent.prototype.kaydet = function () {
        this.istatistikBarService.kaydet("/Istatistik", this.istatistik);
    };
    return IstatistikBarComponent;
}());
IstatistikBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'istatistik-bar',
        templateUrl: 'istatistik-bar.component.html',
        styleUrls: ['istatistik-bar.component.css'],
        providers: [istatistik_bar_service_1.IstatistikBarService]
    }),
    __metadata("design:paramtypes", [istatistik_bar_service_1.IstatistikBarService])
], IstatistikBarComponent);
exports.IstatistikBarComponent = IstatistikBarComponent;
//# sourceMappingURL=istatistik-bar.component.js.map