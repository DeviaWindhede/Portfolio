import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../lazy-img.directive';

class HeaderLink
{
  link: string = "";
  name: string = "";
  fragment?: string | undefined;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ LazyImgDirective, CommonModule, RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('mobileNavbar') mobileNavbar!: ElementRef;
  @ViewChild('showMobileNavbarButton') showMobileNavbarButton!: ElementRef;

  myNewScrollPosition: number = 0;
  myLastScrollPosition: number = 0;
  myScrollTarget: number = 250;

  myShouldMinimize: boolean = false;
  myShouldShowMobileOverlay: boolean = false;

  links: HeaderLink[] = [
    { link: "vertex-painter", name: "Specialization" },
    { link: "group-projects", name: "Group Projects" },
    { link: "dashboard", name: "Personal Projects", fragment: "projects" },
    { link: "dashboard", name: "Contact", fragment: "contact" },
    { link: "dashboard", name: "About", fragment: "about" },
  ];

  constructor(private scroller: ViewportScroller) {
  }


  toggleMobileNavbar(): void {
    this.myShouldShowMobileOverlay = !this.myShouldShowMobileOverlay;
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.myShouldShowMobileOverlay) { return; }
    
     if (!this.mobileNavbar.nativeElement.contains(event.target) && !this.showMobileNavbarButton.nativeElement.contains(event.target) ) {
        this.myShouldShowMobileOverlay = false;
     }
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: any): void {
    this.doScrollUpdate();
  }

  doScrollUpdate(): void {
    this.myLastScrollPosition = window.scrollY;
    this.myShouldMinimize = false;

    // Scrolling down
    if (this.myNewScrollPosition < this.myLastScrollPosition && this.myLastScrollPosition > this.myScrollTarget) {
      this.myShouldMinimize = true;
    }
    // Scrolling up
    else if (this.myNewScrollPosition > this.myLastScrollPosition) {
      this.myShouldMinimize = true;
    }

    if (this.myLastScrollPosition < this.myScrollTarget) {
      this.myShouldMinimize = false;
    }

    this.myNewScrollPosition = this.myLastScrollPosition;
  }

  scroll(anchor: string): void {
    this.scroller.scrollToAnchor(anchor)
  }
  
  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView();
  }
}
