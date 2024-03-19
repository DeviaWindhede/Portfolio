import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexPainterComponent } from './vertex-painter.component';

describe('VertexPainterComponent', () => {
  let component: VertexPainterComponent;
  let fixture: ComponentFixture<VertexPainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertexPainterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VertexPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
