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
var AlakartMenu_1 = require("../_models/AlakartMenu");
var AlakartMenuItem_1 = require("../_models/AlakartMenuItem");
var AlakartMenuComponent = (function () {
    function AlakartMenuComponent() {
        this._silEventHandler = new core_1.EventEmitter();
    }
    AlakartMenuComponent.prototype.ngOnInit = function () {
    };
    AlakartMenuComponent.prototype.sil = function (item) {
        this._silEventHandler.emit(this._alakartMenu);
    };
    AlakartMenuComponent.prototype.satirEkle = function (item) {
        var menuItem = new AlakartMenuItem_1.AlakartMenuItem("0", "", "", "");
        item.AlakartMenuItems.push(menuItem);
    };
    AlakartMenuComponent.prototype.satirSil = function (itemList, item) {
        this.removeFromArray(itemList, item);
    };
    AlakartMenuComponent.prototype.removeFromArray = function (list, value) {
        var idx = list.indexOf(value);
        if (idx !== -1) {
            list.splice(idx, 1);
        }
    };
    return AlakartMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", AlakartMenu_1.AlakartMenu)
], AlakartMenuComponent.prototype, "_alakartMenu", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AlakartMenuComponent.prototype, "_isEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AlakartMenuComponent.prototype, "_silEventHandler", void 0);
AlakartMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'alakart-menu',
        templateUrl: 'alakart-menu.component.html',
        styleUrls: ['alakart-menu.component.css'],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AlakartMenuComponent);
exports.AlakartMenuComponent = AlakartMenuComponent;
//# sourceMappingURL=alakart-menu.component.js.map