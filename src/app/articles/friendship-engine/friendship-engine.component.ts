import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';

@Component({
  selector: 'app-friendship-engine',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent ],
  templateUrl: './friendship-engine.component.html',
  styleUrl: './friendship-engine.component.scss'
})
export class FriendshipEngineComponent {

}
