import { Component, Input } from '@angular/core';
import { LazyImgDirective } from '../lazy-img.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LazyImgDirective, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) path!: string;
}
