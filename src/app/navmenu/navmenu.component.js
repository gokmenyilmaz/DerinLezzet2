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
var globals_1 = require("../globals");
var NavmenuComponent = (function () {
    function NavmenuComponent(globalService) {
        this.globalService = globalService;
        this.globalService.logInGenel();
    }
    NavmenuComponent.prototype.logIn = function () {
        if (this.globalService._userInfo)
            this.globalService.logOut();
        else {
            this.globalService.logIn();
        }
    };
    NavmenuComponent.prototype.openSmallMenu = function () {
        var isBlock = this.smallMenu.nativeElement.style.display == "block";
        if (!isBlock)
            this.smallMenu.nativeElement.style.setProperty("display", "block", "important");
        else
            this.smallMenu.nativeElement.style.setProperty("display", "none", "important");
    };
    NavmenuComponent.prototype.closeSmallMenu = function () {
        this.smallMenu.nativeElement.style.setProperty("display", "none", "important");
    };
    return NavmenuComponent;
}());
__decorate([
    core_1.ViewChild('smallMenu'),
    __metadata("design:type", core_1.ElementRef)
], NavmenuComponent.prototype, "smallMenu", void 0);
NavmenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'nav-menu',
        templateUrl: 'navmenu.component.html',
        styleUrls: ['navmenu.component.css']
    }),
    __metadata("design:paramtypes", [globals_1.AppGlobalsService])
], NavmenuComponent);
exports.NavmenuComponent = NavmenuComponent;
//# sourceMappingURL=navmenu.component.js.map