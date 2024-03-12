import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  new_scroll_position: number = 0;
  last_scroll_position: number = 0;

  constructor() {}
  
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: any) {
    var header = document.getElementById("js-top");
    
    this.last_scroll_position = window.scrollY;
    const scrollPos = 250;

    // Scrolling down
    if (this.new_scroll_position < this.last_scroll_position && this.last_scroll_position > scrollPos) {
      // header?.classList.remove("is-visible");
      // header?.classList.add("is-hidden");
      
      header?.classList.remove("is-hidden");
      header?.classList.add("is-visible");

      // Scrolling up
    } else if (this.new_scroll_position > this.last_scroll_position) {
      header?.classList.remove("is-hidden");
      header?.classList.add("is-visible");
    }

    if (this.last_scroll_position < scrollPos) {
      header?.classList.remove("is-visible");
    }

    this.new_scroll_position = this.last_scroll_position;
  }
}
