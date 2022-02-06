import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class MyHighLightDirective {
    @Input('myHighlight') highlightcolor: string;
    @Input() defaultColor: string;

    constructor(private el: ElementRef) {
        this.highlight(this.defaultColor);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightcolor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(this.defaultColor);
    }

    highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}