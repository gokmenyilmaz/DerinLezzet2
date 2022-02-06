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
var MyHighLightDirective = (function () {
    function MyHighLightDirective(el) {
        this.el = el;
        this.highlight(this.defaultColor);
    }
    MyHighLightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightcolor);
    };
    MyHighLightDirective.prototype.onMouseLeave = function () {
        this.highlight(this.defaultColor);
    };
    MyHighLightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return MyHighLightDirective;
}());
__decorate([
    core_1.Input('myHighlight'),
    __metadata("design:type", String)
], MyHighLightDirective.prototype, "highlightcolor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyHighLightDirective.prototype, "defaultColor", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyHighLightDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyHighLightDirective.prototype, "onMouseLeave", null);
MyHighLightDirective = __decorate([
    core_1.Directive({
        selector: '[myHighlight]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MyHighLightDirective);
exports.MyHighLightDirective = MyHighLightDirective;
//# sourceMappingURL=my-highlight.directive.js.map