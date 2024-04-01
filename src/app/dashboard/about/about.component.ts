import { Component } from '@angular/core';
import { LazyImgDirective } from '../../lazy-img.directive';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ LazyImgDirective, RouterOutlet ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
