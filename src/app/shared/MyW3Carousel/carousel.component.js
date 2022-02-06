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
var MyW3CarouselComponent = (function () {
    function MyW3CarouselComponent() {
        this.displayItems = [];
        this.indexItem = 0;
        this.dotItems = [];
    }
    MyW3CarouselComponent.prototype.ngOnInit = function () {
    };
    MyW3CarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.displayItems = this.dataContainer.nativeElement.querySelectorAll('ul>li');
        this.dotItems = this.dotContainer.nativeElement.querySelectorAll('.carousel-dots span');
        this.displayItems[0].classList.add("current");
        setInterval(function () { _this.carousel(_this.indexItem += 1); }, this.saniye);
    };
    MyW3CarouselComponent.prototype.plusDivs = function (i) {
        this.carousel(this.indexItem += i);
    };
    MyW3CarouselComponent.prototype.carousel = function (indexItem) {
        if (this.indexItem > this.displayItems.length - 1) {
            this.indexItem = 0;
        }
        if (this.indexItem < 0) {
            this.indexItem = this.displayItems.length - 1;
        }
        for (var _i = 0, _a = this.displayItems; _i < _a.length; _i++) {
            var item = _a[_i];
            item.classList.remove("current");
        }
        for (var _b = 0, _c = this.dotItems; _b < _c.length; _b++) {
            var item = _c[_b];
            // item.classList.remove("current");
        }
        this.displayItems[this.indexItem].classList.add("current");
        // this.dotItems[this.indexItem].classList.add("current");
    };
    return MyW3CarouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MyW3CarouselComponent.prototype, "saniye", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyW3CarouselComponent.prototype, "buttons", void 0);
__decorate([
    core_1.ViewChild('dataContainer'),
    __metadata("design:type", core_1.ElementRef)
], MyW3CarouselComponent.prototype, "dataContainer", void 0);
__decorate([
    core_1.ViewChild('dotContainer'),
    __metadata("design:type", core_1.ElementRef)
], MyW3CarouselComponent.prototype, "dotContainer", void 0);
MyW3CarouselComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-w3carousel",
        templateUrl: "carousel.component.html",
        styleUrls: ["carousel.component.css"]
    }),
    __metadata("design:paramtypes", [])
], MyW3CarouselComponent);
exports.MyW3CarouselComponent = MyW3CarouselComponent;
//# sourceMappingURL=carousel.component.js.map