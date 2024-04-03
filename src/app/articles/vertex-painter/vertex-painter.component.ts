import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('selection') selectionElement!: ElementRef;

  scrollToSelection(): void {
    this.selectionElement.nativeElement.scrollIntoView();
  }

  readonly gBufferExport =
  `  float2 EntityIDToEffect(uint entityId)
  {
      float2 effects;
      effects.x = ui2f8((entityId >> 8) & 0xFF);
      effects.y = ui2f8(entityId & 0xFF);
      return effects;
  }

  output.worldPosition = input.worldPosition;
  output.effects = float4(effects, EntityIDToEffect(input.entityData.x));`;

  readonly colorSaving = `
  UINT step = vertexCount * vertexPaintedIndex + 1;
  UINT uvLocation[2] = { step % TEXTURE_SIZE, step / TEXTURE_SIZE };

  uvLocation[0] += vertexIndex;
  uvLocation[1] += uvLocation[0] / TEXTURE_SIZE;
  uvLocation[0] %= TEXTURE_SIZE;`;

  readonly textureMapping = `
TextureData& material = tdb.GetVertexTextureRef(mesh->GetVertexTextureId()).materials.vertex;
material.stagingTexture->CopyToStaging();

D3D11_MAPPED_SUBRESOURCE mappedResource;
HRESULT hr = context->Map(material.texture->Get(), 0, D3D11_MAP_WRITE_DISCARD, 0, &mappedResource);
if (FAILED(hr))
{
  PrintE("[VertexPainterWindow.cpp] Failed to map texture: ");
  return;
}

UINT* data = reinterpret_cast<UINT*>(mappedResource.pData);

{
  D3D11_MAPPED_SUBRESOURCE stagingResource;
  D3D11_TEXTURE2D_DESC desc;
  material.stagingTexture->GetDesc(&desc);
  if (!material.stagingTexture->Map(stagingResource))
  {
    PrintE("[VertexPainterWindow.cpp] Failed to map staging texture: ");
    return;
  }

  memcpy(data, stagingResource.pData, static_cast<size_t>(desc.Width) * static_cast<size_t>(desc.Height) * sizeof(uint32_t));
 
  material.stagingTexture->Unmap();
}

for (size_t i = 0; i < writeData.size(); i++)
{
  data[writeData[i].index] = writeData[i].pixel;
}

context->Unmap(material.texture->Get(), 0);`;











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
