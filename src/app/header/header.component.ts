import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  myNewScrollPosition: number = 0;
  myLastScrollPosition: number = 0;
  myScrollTarget: number = 250;

  myShouldMinimize: boolean = false;

  constructor() {
  }
  
  ngOnInit() {
    // this.myLastScrollPosition = window.scrollY;
    // this.myNewScrollPosition = this.myLastScrollPosition;
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
}
