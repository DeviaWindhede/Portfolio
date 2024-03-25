import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';

@Component({
  selector: 'app-vertex-painter',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective ],
  templateUrl: './vertex-painter.component.html',
  styleUrl: './vertex-painter.component.scss'
})
export class VertexPainterComponent {
  readonly codeContainer = [
    `void someFunc() {

    }`,
    'test2', 'test3', 'test4', 'test5'
  ];

  readonly exampleFolderStructure = 
`vertex-painter-dir
│
└───sceneName0
│   │   mesh_0.dds
│   │   mesh_1.dds
│   │   anotherMesh_0.dds
│   │   vertexDefines.data
│   
└───sceneName1
    │   mesh_0.dds
    │   yetAnotherMesh_0.dds
    │   vertexDefines.data
`;

	backToTop(): void {
		window.scrollTo(0, 0);
	}
}
