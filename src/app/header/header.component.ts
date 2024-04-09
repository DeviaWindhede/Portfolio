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
  myLastScrollPosition: number = 0;

  myShouldMinimize: boolean = false;
  myShouldHideMobileOverlay: boolean = true;

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
    this.myShouldHideMobileOverlay = !this.myShouldHideMobileOverlay;
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: any): void {
    this.doScrollUpdate();
  }
  
  doScrollUpdate(): void {
    const currentScroll = window.scrollY;
    this.myShouldMinimize = this.myLastScrollPosition < currentScroll;
    this.myLastScrollPosition = currentScroll;
  }

  scroll(anchor: string): void {
    this.scroller.scrollToAnchor(anchor)
  }
  
  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView();
  }
}
