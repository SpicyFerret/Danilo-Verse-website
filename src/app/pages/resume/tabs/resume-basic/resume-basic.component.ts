import { Component } from '@angular/core';
import { Utility } from '../../../../util/utility';
import { NavComponent } from '../../../../shared/nav/nav.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-resume-basic',
  standalone: true,
  imports: [NgClass],
  templateUrl: './resume-basic.component.html',
  styleUrl: './resume-basic.component.css',
})
export class ResumeBasicComponent {
  whatsApp = Utility.getWhatsAppLink(
    '5541999239889',
    'Hello, I saw your resume and I would like to talk to you.'
  );

  mobilesCanvas(): boolean {
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
    const isMobile = window.matchMedia('(max-width: 1000px)').matches;

    return (isPortrait || isMobile);
  }
}
