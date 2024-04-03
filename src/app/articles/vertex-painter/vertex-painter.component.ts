import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';
import { NgxGistModule } from '@ekkolon/ngx-gist';

@Component({
  selector: 'app-vertex-painter',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent, NgxGistModule ],
  templateUrl: './vertex-painter.component.html',
  styleUrl: './vertex-painter.component.scss'
})
export class VertexPainterComponent {
  scrollToElement(el: HTMLHeadElement): void {
    el.scrollIntoView();
  }

  readonly exampleFolderStructure = 
`vertexTextures
│
└───sceneName0
│   │   mesh_0.dds
│   │   mesh_1.dds
│   │   anotherMesh_0.dds
│   │   vertexDefines.data
│   │   vertexIndexDefines.data
│   
└───sceneName1
    │   mesh_0.dds
    │   yetAnotherMesh_0.dds
    │   vertexDefines.data
    │   vertexIndexDefines.data
`;

}
