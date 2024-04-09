import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'video[preload]',
  standalone: true
})
export class LazyVideoDirective {
  constructor({ nativeElement }: ElementRef<HTMLVideoElement>) {
    const supports = 'preload' in HTMLVideoElement.prototype;
    if (supports) {
      nativeElement.preload = "none";
      nativeElement.muted = true;
    } else {
      // fallback to IntersectionObserver
      return;
    }

    nativeElement.load();
    nativeElement.classList.add('is-loaded');
    console.log(nativeElement.readyState);
    if (nativeElement.readyState >= 2) {
      nativeElement.play();
    }
  }
}
