import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lang-selector',
  standalone: true,
  imports: [],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.css'
})
export class LangSelectorComponent {
  constructor(private location: Location) { }

  switchLanguage(language: string): void {
    const curDir = this.location.path();
    const newDir = curDir.replace(/\/[a-z]{2}-[A-Z]{2}\//, `/${language}/`);
    window.location.href = newDir;
    console.log(`switchLanguage: ${curDir} -> ${newDir}`);
  }
}
