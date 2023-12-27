import { Component } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [SocialMediaComponent, RouterLink]
})
export class FooterComponent {

}
