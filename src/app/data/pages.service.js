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
var pages_data_1 = require("./pages.data");
var PagesService = (function () {
    function PagesService() {
    }
    PagesService.prototype.getMainSlideImages = function (imageFolder) {
        var gorselObj = JSON.parse(pages_data_1.mainslideJson);
        for (var _i = 0, gorselObj_1 = gorselObj; _i < gorselObj_1.length; _i++) {
            var item = gorselObj_1[_i];
            item.image = imageFolder + item.image;
        }
        return gorselObj;
    };
    PagesService.prototype.getGorseller = function (imageFolder) {
        var gorselObj = JSON.parse(pages_data_1.gorsellerJson);
        for (var _i = 0, gorselObj_2 = gorselObj; _i < gorselObj_2.length; _i++) {
            var item = gorselObj_2[_i];
            item.image = imageFolder + item.image;
        }
        return gorselObj;
    };
    PagesService.prototype.getKisiyeOzelEkipmanlar = function (imageFolder) {
        var gorselObj = JSON.parse(pages_data_1.kisiyeOzelEkipmanJson);
        for (var _i = 0, gorselObj_3 = gorselObj; _i < gorselObj_3.length; _i++) {
            var item = gorselObj_3[_i];
            item.image = imageFolder + item.image;
        }
        return gorselObj;
    };
    PagesService.prototype.getKurumaOzelEkipmanlar = function (imageFolder) {
        var gorselObj = JSON.parse(pages_data_1.kurumaOzelEkipmanJson);
        for (var _i = 0, gorselObj_4 = gorselObj; _i < gorselObj_4.length; _i++) {
            var item = gorselObj_4[_i];
            item.image = imageFolder + item.image;
        }
        return gorselObj;
    };
    return PagesService;
}());
PagesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PagesService);
exports.PagesService = PagesService;
//# sourceMappingURL=pages.service.js.map