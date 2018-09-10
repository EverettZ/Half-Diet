import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBackgrounder]'
})
export class BackgrounderDirective {

  constructor(el: ElementRef, private renderer: Renderer) {

    this.renderer.setElementStyle(el.nativeElement, 'backgroundImage', 'url(\'./assets/images/backgrounder/Artboard 1.svg\')');
    this.renderer.setElementStyle(el.nativeElement, 'backgroundRepeat', 'no-repeat');
    this.renderer.setElementStyle(el.nativeElement, 'backgroundSize', 'cover');
    this.renderer.setElementStyle(el.nativeElement, 'backgroundPosition', 'top');
  }

}
