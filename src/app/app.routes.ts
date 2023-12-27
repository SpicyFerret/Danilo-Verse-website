import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'hobbies', component: HobbiesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'privacy', component: PrivacyComponent},
    { path: '**', component: NotFoundComponent }
    ];
