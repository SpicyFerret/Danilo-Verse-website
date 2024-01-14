import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeBasicComponent } from './tabs/resume-basic/resume-basic.component';
import { ResumeEducationComponent } from './tabs/resume-education/resume-education.component';
import { ResumeExperienceComponent } from './tabs/resume-experience/resume-experience.component';
import { ResumeSkillsComponent } from './tabs/resume-skills/resume-skills.component';
import { ResumeProjectsComponent } from './tabs/resume-projects/resume-projects.component';
import { ResumeLanguagesComponent } from './tabs/resume-languages/resume-languages.component';
import { NavComponent } from '../../shared/nav/nav.component';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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
    CommonModule,
  ],
})
export class ResumeComponent {
  active: string = 'basic';
  scrollingToSection = false;

  expandedNavStatus(): boolean {
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
      NavComponent.getInstance().expandedNavStatus() && (isPortrait || isMobile)
    );
  }

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
    const sections = [
      'basic',
      'education',
      'experience',
      'skills',
      'projects',
      'languages',
    ];
    for (const section of sections) {
      const element = document.getElementById(section + '-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 250) {
          this.active = section;
          return;
        }
      }
    }
  }

  // Download Resume ID="resume-content"
  downloadResume(): void {
    const element = document.getElementById('resume-content');
    if (element) {
      html2canvas(element, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageHeight = 297;  // A4 height
        const imgHeight = canvas.height * 210 / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, 190, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, 210, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.setProperties({
          title: 'Resume',
          subject: 'Resume',
          author: 'Danilo Neumann Marques',
        });

        pdf.save("Danilo's Resume.pdf");
      });
    }
  }
}
