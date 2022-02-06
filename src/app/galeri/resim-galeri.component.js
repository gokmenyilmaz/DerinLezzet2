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
var resim_galeri_service_1 = require("./resim-galeri.service");
require("rxjs/add/operator/map");
var FigureItem = (function () {
    function FigureItem(Baslik, ResimYol, Icerik) {
        this.Baslik = Baslik;
        this.ResimYol = ResimYol;
        this.Icerik = Icerik;
    }
    return FigureItem;
}());
exports.FigureItem = FigureItem;
var ResimGaleriComponent = (function () {
    function ResimGaleriComponent(resimGaleriService) {
        this.resimGaleriService = resimGaleriService;
        this.FigureList = [];
        this.aktifResimYol = "";
        this.AktifResimIcerik = "";
        this.aktifResimBaslik = "";
        this.aktiveImageIndex = 0;
        this.yukle();
    }
    ResimGaleriComponent.prototype.ngOnInit = function () {
    };
    ResimGaleriComponent.prototype.yukle = function () {
        var _this = this;
        this.FigureList = [];
        this.resimGaleriService.resimleriGetir("/ResimGaleri/Genel")
            .subscribe(function (data) {
            _this.FigureList = data;
            _this.FigureList.map(function (c) { c.ResimYol = c.ResimYol.replace("/gorseller/", "/gorseller/thumb/"); return c; });
        });
    };
    ResimGaleriComponent.prototype.kaydet = function () {
        this.resimGaleriService.kaydet("/ResimGaleri/Genel", this.FigureList);
    };
    ResimGaleriComponent.prototype.showModal = function (item) {
        this.modalForm.nativeElement.style.display = "block";
        this.aktiveImageIndex = this.FigureList.indexOf(item);
        this.loadImagesFromIndex(this.aktiveImageIndex);
    };
    ResimGaleriComponent.prototype.closeModal = function () {
        this.modalForm.nativeElement.style.display = "none";
    };
    ResimGaleriComponent.prototype.leftClick = function ($event) {
        $event.stopPropagation();
        if (this.aktiveImageIndex == 0)
            return;
        this.aktiveImageIndex--;
        this.loadImagesFromIndex(this.aktiveImageIndex);
    };
    ResimGaleriComponent.prototype.rightClick = function ($event) {
        $event.stopPropagation();
        if (this.aktiveImageIndex == this.FigureList.length - 1)
            return;
        this.aktiveImageIndex++;
        this.loadImagesFromIndex(this.aktiveImageIndex);
    };
    ResimGaleriComponent.prototype.loadImagesFromIndex = function (i) {
        this.aktifResimYol = this.FigureList[i].ResimYol.replace("thumb", "big");
    };
    return ResimGaleriComponent;
}());
__decorate([
    core_1.ViewChild('modal01'),
    __metadata("design:type", core_1.ElementRef)
], ResimGaleriComponent.prototype, "modalForm", void 0);
ResimGaleriComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'resim-galeri',
        templateUrl: 'resim-galeri.component.html',
        styleUrls: ['resim-galeri.component.css'],
        providers: [resim_galeri_service_1.ResimGaleriService]
    }),
    __metadata("design:paramtypes", [resim_galeri_service_1.ResimGaleriService])
], ResimGaleriComponent);
exports.ResimGaleriComponent = ResimGaleriComponent;
//# sourceMappingURL=resim-galeri.component.js.map