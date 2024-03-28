import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';

@Component({
  selector: 'app-vertex-painter',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent ],
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

readonly vertexShaderPart1 =`
uint2 GetInitialUVIndexFromEntity(uint entityIndex, uint textureWidth, uint textureHeight)
{
    float4 vertexColors = aVertexColorTexture.Load(int3(0, 0, 0));
    
    uint vertCount = f2ui8(vertexColors.r);
    vertCount |= f2ui8(vertexColors.g) << 8;
    vertCount |= f2ui8(vertexColors.b) << 16;
    vertCount |= f2ui8(vertexColors.a) << 24;
    
    uint i = vertCount * entityIndex + 1;
    return uint2(i % textureWidth, i / textureHeight);
}`; 

readonly vertexShaderPart2 =`
uint2 GetUVIndexFromEntityVertex(uint vertexIndex, uint entityIndex)
{
    uint width = 0;
    uint height = 0;
    uint levels = 0;
    aVertexColorTexture.GetDimensions(0, width, height, levels);
    
    uint2 result = GetInitialUVIndexFromEntity(entityIndex, width, height);
    result.x += uint(vertexIndex % width);
    result.y += uint(vertexIndex / height);
    
    return result;
}`; 
}
