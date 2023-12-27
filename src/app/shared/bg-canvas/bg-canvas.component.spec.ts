import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCanvasComponent } from './bg-canvas.component';

describe('BgCanvasComponent', () => {
  let component: BgCanvasComponent;
  let fixture: ComponentFixture<BgCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
