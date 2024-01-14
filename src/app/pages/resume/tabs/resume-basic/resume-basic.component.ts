import { Component } from '@angular/core';
import { Utility } from '../../../../util/utility';

@Component({
  selector: 'app-resume-basic',
  standalone: true,
  imports: [],
  templateUrl: './resume-basic.component.html',
  styleUrl: './resume-basic.component.css'
})
export class ResumeBasicComponent {
  whatsApp = Utility.getWhatsAppLink('5541999239889', 'Hello, I saw your resume and I would like to talk to you.');
}
