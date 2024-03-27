import { Component, Inject } from '@angular/core';
import { WindowRefService } from '../../window-ref.service';

@Component({
  selector: 'app-back-to-top-btn',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top-btn.component.html',
  styleUrl: './back-to-top-btn.component.scss'
})
export class BackToTopBtnComponent {
  constructor(private windowRef: WindowRefService) {
  }

	backToTop(): void {
		this.windowRef.nativeWindow.scrollTo(0, 0);
	}
}
