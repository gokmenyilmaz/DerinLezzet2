import { Component } from '@angular/core';

@Component(
  {
    selector: 'collapsible-panel',
    template: `
 <div class="panel">
    <div class="panel-heading" (click)="visible = !visible">
      <h3 class="panel-title">
        <ng-content select="span.title"></ng-content>
      </h3>
    </div>
    <div class="panel-body" *ngIf="visible">
      <ng-content></ng-content>
    </div>
  </div>
    `
  })

export class MyTabComponent {
  visible:boolean=false;
}