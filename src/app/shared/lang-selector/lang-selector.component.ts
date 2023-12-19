import { Component } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  standalone: true,
  imports: [],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.css'
})
export class LangSelectorComponent {
  constructor() { }

  switchLanguage(language: string): void {
    console.log(language);
  }
}
