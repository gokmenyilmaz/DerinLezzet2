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
var alakart_service_1 = require("./alakart.service");
var AlakartMenu_1 = require("../_models/AlakartMenu");
var AlakartMenuItem_1 = require("../_models/AlakartMenuItem");
var globals_1 = require("../globals");
var alakart_menu_component_1 = require("../alakart-menu/alakart-menu.component");
var AlakartComponent = (function () {
    function AlakartComponent(alakartService, globalService) {
        this.alakartService = alakartService;
        this.globalService = globalService;
        this.alakartMenus = [];
        this._isEditMode = false;
        this.setBosAlakartMenus();
    }
    AlakartComponent.prototype.silust = function (item) {
        this.altMenuComponent.AlakartMenuItems = null;
        console.log(this.altMenuComponent);
    };
    AlakartComponent.prototype.menuSilindi = function (item) {
        var inx = this.alakartMenus.indexOf(item);
        this.alakartMenus.splice(inx, 1);
    };
    AlakartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alakartService.alakartVerileriniGetir().subscribe(function (data) {
            if (data.$exists()) {
                _this.alakartMenus = data;
            }
            else {
                _this.setBosAlakartMenus();
            }
        });
    };
    AlakartComponent.prototype.setBosAlakartMenus = function () {
        this.alakartMenus = [];
        var alakartMenuItems1 = [];
        alakartMenuItems1.push(new AlakartMenuItem_1.AlakartMenuItem("0", "", "", ""));
        var alakartMenuItems2 = [];
        alakartMenuItems2.push(new AlakartMenuItem_1.AlakartMenuItem("0", "", "", ""));
        var alakartMenuItems3 = [];
        alakartMenuItems3.push(new AlakartMenuItem_1.AlakartMenuItem("0", "", "", ""));
        var alakartMenuItems4 = [];
        alakartMenuItems4.push(new AlakartMenuItem_1.AlakartMenuItem("0", "", "", ""));
        var alakartMenuItems5 = [];
        alakartMenuItems5.push(new AlakartMenuItem_1.AlakartMenuItem("0", "", "", ""));
        var alakartMenuItems6 = [];
        alakartMenuItems6.push(new AlakartMenuItem_1.AlakartMenuItem("0", "", "", ""));
        var alakartMenu1 = new AlakartMenu_1.AlakartMenu("12.10.2017", "Kahvaltılıklar", 200, alakartMenuItems1);
        var alakartMenu2 = new AlakartMenu_1.AlakartMenu("12.10.2017", "Sandviçler", 200, alakartMenuItems2);
        var alakartMenu3 = new AlakartMenu_1.AlakartMenu("12.10.2017", "Salatalar", 200, alakartMenuItems3);
        var alakartMenu4 = new AlakartMenu_1.AlakartMenu("12.10.2017", "Yemekler", 200, alakartMenuItems4);
        var alakartMenu5 = new AlakartMenu_1.AlakartMenu("12.10.2017", "Tatlılar", 200, alakartMenuItems5);
        var alakartMenu6 = new AlakartMenu_1.AlakartMenu("12.10.2017", "İçecekler", 200, alakartMenuItems6);
        this.alakartMenus.push(alakartMenu1);
        this.alakartMenus.push(alakartMenu2);
        this.alakartMenus.push(alakartMenu3);
        this.alakartMenus.push(alakartMenu4);
        this.alakartMenus.push(alakartMenu5);
        this.alakartMenus.push(alakartMenu6);
    };
    AlakartComponent.prototype.duzenle = function () {
        this._isEditMode = true;
    };
    AlakartComponent.prototype.kaydet = function () {
        this.alakartService.alakartVeriKaydet(this.alakartMenus);
        this._isEditMode = false;
    };
    return AlakartComponent;
}());
__decorate([
    core_1.ViewChild(alakart_menu_component_1.AlakartMenuComponent),
    __metadata("design:type", AlakartMenu_1.AlakartMenu)
], AlakartComponent.prototype, "altMenuComponent", void 0);
AlakartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'alakart',
        templateUrl: 'alakart.component.html',
        styleUrls: ['alakart.component.css'],
        providers: [alakart_service_1.AlakartService]
    }),
    __metadata("design:paramtypes", [alakart_service_1.AlakartService, globals_1.AppGlobalsService])
], AlakartComponent);
exports.AlakartComponent = AlakartComponent;
//# sourceMappingURL=alakart.component.js.map