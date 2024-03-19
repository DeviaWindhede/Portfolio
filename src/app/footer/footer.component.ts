import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  backToTopButton: HTMLElement | null | undefined;

  constructor() {}
  
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: any) {
    this.backToTopButton = document.getElementById("backToTop");

    window.onscroll = function() {backToTopScrollFunction()};
  }

  backToTopScrollFunction(): void
  {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
    {
      this.backToTopButton?.classList.add("is-visible");
    }
    else
    {
      this.backToTopButton?.classList.remove("is-visible");
    }
  }

  backToTopFunction() : void
  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}

function backToTopScrollFunction() {
  throw new Error('Function not implemented.');
}

