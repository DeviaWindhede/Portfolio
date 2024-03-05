import { Component } from '@angular/core';
import { LazyImgDirective } from '../lazy-img.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LazyImgDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
