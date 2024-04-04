import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';
import { NgxGistModule } from '@ekkolon/ngx-gist';

@Component({
  selector: 'app-shitbox',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent, NgxGistModule ],
  templateUrl: './shitbox.component.html',
  styleUrl: './shitbox.component.scss'
})
export class ShitboxComponent {
}
