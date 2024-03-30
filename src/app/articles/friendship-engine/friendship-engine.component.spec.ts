import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendshipEngineComponent } from './friendship-engine.component';

describe('FriendshipEngineComponent', () => {
  let component: FriendshipEngineComponent;
  let fixture: ComponentFixture<FriendshipEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendshipEngineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendshipEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
