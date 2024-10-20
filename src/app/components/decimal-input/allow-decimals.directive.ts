import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  standalone: true,
  selector: '[allowDecimal]'
})
export class AllowDecimalsDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keyup') onKeyDown() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/^(0|[1-9]\d*)(\.\d+)?$/, '');
  }

}
