import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLanguagesComponent } from './resume-languages.component';

describe('ResumeLanguagesComponent', () => {
  let component: ResumeLanguagesComponent;
  let fixture: ComponentFixture<ResumeLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
