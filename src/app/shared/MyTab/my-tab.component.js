"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyTabComponent = (function () {
    function MyTabComponent() {
    }
    return MyTabComponent;
}());
MyTabComponent = __decorate([
    core_1.Component({
        selector: 'collapsible-panel',
        template: "\n <div class=\"panel\">\n    <div class=\"panel-heading\" (click)=\"visible = !visible\">\n      <h3 class=\"panel-title\">\n        <ng-content select=\"span.title\"></ng-content>\n      </h3>\n    </div>\n    <div class=\"panel-body\" *ngIf=\"visible\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n    "
    })
], MyTabComponent);
exports.MyTabComponent = MyTabComponent;
//# sourceMappingURL=my-tab.component.js.map