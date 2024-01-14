import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBasicComponent } from './resume-basic.component';

describe('ResumeBasicComponent', () => {
  let component: ResumeBasicComponent;
  let fixture: ComponentFixture<ResumeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
