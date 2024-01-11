import { Component } from '@angular/core';
import { BlockMananger } from '../../util/blockMananger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private pageContent: BlockMananger;

  constructor() {
    this.pageContent = new BlockMananger();
    // Welcome
    this.pageContent.addBlock(
      "Welcome to the Danilo-Verse",
      "Here you can explore my world and learn about my passions and interests.\nEnjoy your stay!",
      "../../../assets/pictures/inside-cessna152.jpeg"
    );
    // About me
    this.pageContent.addBlock(
      'About me',
      `Hello there! I'm Danilo Neumann Marques, a ${this.getMyAge()} years old software developer and plane pilot, and I'm thrilled to welcome you to my digital space.\nHere, you'll find a blend of my interests, including PC games, PC building, JDM cars, aviation, programming, and anime.\nJoin me on this journey as I share my experiences, insights, and creations.`,
      '../../../assets/pictures/helloween-pilot.jpg'
    );
    // Explore more
    this.pageContent.addBlock(
      'Explore more',
      `Use the navigation menu to delve into specific aspects of my life, such as my hobbies, professional journey, and how to get in touch.\nThanks for stopping by!`,
      '../../../assets/pictures/forest.jpg'
    );
  }

  ngAfterViewInit(): void {
    this.loadPageContent();
  }

  loadPageContent(): void {
    const content =  this.pageContent.assemble();
    const pageContent = document.getElementById('page-content');
    if (pageContent) {
      pageContent.innerHTML = content;
    }
  }
  

  getMyAge(): number {
    const today = new Date();
    const birthDate = new Date('2000-07-01');
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  }

  
}
