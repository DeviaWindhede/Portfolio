import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecs',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './ecs.component.html',
  styleUrl: './ecs.component.scss'
})
export class EcsComponent {
  readonly codeContainer = [
    `void someFunc() {

    }`,
    'test2', 'test3', 'test4', 'test5'
  ];
}
