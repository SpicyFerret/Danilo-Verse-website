import { Component } from '@angular/core';
import { LangSelectorComponent } from "../lang-selector/lang-selector.component";
import { RouterLink } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [LangSelectorComponent, RouterLink, SocialMediaComponent, NgbNavModule, NgbDropdownModule]
})
export class NavComponent {
    disabled = true;
}
