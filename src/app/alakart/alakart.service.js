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
var AlakartService = (function () {
    function AlakartService(af) {
        this.af = af;
    }
    AlakartService.prototype.alakartVerileriniGetir = function () {
        var yol = "/AlakartMenu";
        return this.af.database.object(yol);
    };
    AlakartService.prototype.alakartVeriKaydet = function (data) {
        var yol = "/AlakartMenu";
        delete data['$key'];
        delete data['$exists'];
        return this.af.database.object(yol).set(data);
    };
    return AlakartService;
}());
AlakartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], AlakartService);
exports.AlakartService = AlakartService;
//# sourceMappingURL=alakart.service.js.map