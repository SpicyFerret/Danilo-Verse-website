import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeBasicComponent } from './tabs/resume-basic/resume-basic.component';
import { ResumeEducationComponent } from './tabs/resume-education/resume-education.component';
import { ResumeExperienceComponent } from './tabs/resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from './tabs/resume-skills/resume-skills.component';
import { ResumeProjectsComponent } from './tabs/resume-projects/resume-projects.component';
import { ResumeLanguagesComponent } from './tabs/resume-languages/resume-languages.component';


@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  imports: [
    NgbNavModule,
    ResumeBasicComponent,
    ResumeEducationComponent,
    ResumeExperienceComponent,
    ResumeSkillsComponent,
    ResumeProjectsComponent,
    ResumeLanguagesComponent,
  ],
})
export class ResumeComponent {
  active: string = 'basic';
  scrollingToSection = false;

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 60; // adjust this value to match the height of your navbar
      this.scrollingToSection = true;
      window.scrollTo({ top: top, behavior: 'smooth' });
      setTimeout(() => {
        this.scrollingToSection = false;
      }, 2000);
    }
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    if (this.scrollingToSection) {
      return;
    }
    const sections = ['basic', 'education', 'experience', 'skills', 'projects', 'languages'];
    for (const section of sections) {
      const element = document.getElementById(section + '-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 210 && rect.bottom >= 210) {
          this.active = section;
          return;
        }
      }
    }
  }
}
