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
var ekipman_service_1 = require("./ekipman.service");
var EkipmanComponent = (function () {
    function EkipmanComponent() {
        this.slideItemsKisiyeOzel = [];
        this.slideItemsFirmayaOzel = [];
        this.baslik = "";
        this.baslik = "tanıtım carousel";
    }
    EkipmanComponent.prototype.ngOnInit = function () {
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/1.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/2.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/3.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/4.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/5.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/6.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsKisiyeOzel.push({ 'src': 'src/assets/images/ekipmanlar/kisiyeozel/7.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': 'src/assets/images/ekipmanlar/firmayaozel/1.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': 'src/assets/images/ekipmanlar/firmayaozel/2.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': 'src/assets/images/ekipmanlar/firmayaozel/3.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': 'src/assets/images/ekipmanlar/firmayaozel/4.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': 'src/assets/images/ekipmanlar/firmayaozel/5.jpg', 'sitil': 'none', "caption": "" });
        this.slideItemsFirmayaOzel.push({ 'src': 'src/assets/images/ekipmanlar/firmayaozel/6.jpg', 'sitil': 'none', "caption": "" });
    };
    return EkipmanComponent;
}());
EkipmanComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ekipman',
        templateUrl: 'ekipman.component.html',
        styleUrls: ['ekipman.component.css'],
        providers: [ekipman_service_1.EkipmanService]
    }),
    __metadata("design:paramtypes", [])
], EkipmanComponent);
exports.EkipmanComponent = EkipmanComponent;
//# sourceMappingURL=ekipman.component.js.map