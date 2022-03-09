import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input()
  appChangeColor = ''

  constructor(private element: ElementRef) { 
    element.nativeElement.style.color = 'blue'
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.element.nativeElement.style.backgroundColor = this.appChangeColor
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = ''
  }

}
