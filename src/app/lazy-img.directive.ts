import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[loading]',
  standalone: true
})
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    // console.log("go!!!");
    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    } else {
      // fallback to IntersectionObserver
      return;
    }
    if (nativeElement.complete) {
      nativeElement.classList.add('is-loaded');
      return;
    }
    nativeElement.addEventListener('load', function () {
        this.classList.add('is-loaded');
    }, false);
  }
}
