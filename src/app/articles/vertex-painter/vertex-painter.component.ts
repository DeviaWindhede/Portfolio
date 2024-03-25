import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertex-painter',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './vertex-painter.component.html',
  styleUrl: './vertex-painter.component.scss'
})
export class VertexPainterComponent {
  readonly codeContainer = [
    `void someFunc() {

    }`,
    'test2', 'test3', 'test4', 'test5'
  ];
  
	backToTop(): void {
		window.scrollTo(0, 0);
	}
}
