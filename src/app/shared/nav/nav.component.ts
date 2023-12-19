import { Component } from '@angular/core';
import { LangSelectorComponent } from "../lang-selector/lang-selector.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [LangSelectorComponent, RouterLink]
})
export class NavComponent {
}
