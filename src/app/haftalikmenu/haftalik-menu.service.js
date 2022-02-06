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
var angularfire2_1 = require("angularfire2");
var HaftalikMenuService = (function () {
    function HaftalikMenuService(af) {
        this.af = af;
    }
    HaftalikMenuService.prototype.haftaVerileriniGetir = function (_yil, _ay, _pazartesiKey) {
        var yol = "/HaftalikMenu/" + _yil + "/" + _ay + "/" + _pazartesiKey;
        return this.af.database.object(yol);
    };
    HaftalikMenuService.prototype.haftaVeriKaydet = function (_yil, _ay, _pazartesiKey, _haftaData) {
        var yol = "/HaftalikMenu/" + _yil + "/" + _ay + "/" + _pazartesiKey;
        delete _haftaData['$key'];
        delete _haftaData['$exists'];
        return this.af.database.object(yol).set(_haftaData);
    };
    return HaftalikMenuService;
}());
HaftalikMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], HaftalikMenuService);
exports.HaftalikMenuService = HaftalikMenuService;
//# sourceMappingURL=haftalik-menu.service.js.map