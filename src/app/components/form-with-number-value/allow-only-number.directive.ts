import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  standalone: true,
  selector: '[allowOnlyNumber]'
})
export class AllowOnlyNumberDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keyup') onKeyDown() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/[^0-9]*/g, '');
  }

}
