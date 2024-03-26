import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  backToTopClass: string = "";

  constructor() {}
  
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: any) {
    if (window.scrollY > 400 )
    {
      this.backToTopClass = "is-visible";
      return;
    }

    this.backToTopClass = "";
    return;
  }

	backToTopFunction(): void {
		window.scrollTo(0, 0);
	}
}

