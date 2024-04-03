import { Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs';
import { WindowRefService } from './window-ref.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ WindowRefService ],
})
export class AppComponent {
  title = 'portfolio';
  
  constructor(
    router: Router
  ) {
    router.events.pipe(
      filter((routerEvent: Event) => routerEvent instanceof NavigationEnd)
    ).subscribe(event => {
      if(event instanceof NavigationEnd) {
        if (typeof window !== "undefined" && event.url.lastIndexOf('#') === -1) {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
