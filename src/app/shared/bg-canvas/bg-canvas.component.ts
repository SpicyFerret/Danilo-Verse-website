import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MeteorShower } from './meteor';

@Component({
  selector: 'app-bg-canvas',
  standalone: true,
  imports: [],
  templateUrl: './bg-canvas.component.html',
  styleUrl: './bg-canvas.component.css',
})
export class BgCanvasComponent implements AfterViewInit {
  @ViewChild('bgCanvas', { static: true })
  bgCanvas!: ElementRef<HTMLCanvasElement>;
  ngAfterViewInit(): void {
    this.draw();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.draw();
  }

  private draw(): void {
    const canvas = this.bgCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Set canvas dimensions to fill the window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Draw on the canvas
      ctx.fillStyle = '#112';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (this.meteorShower) {
        this.meteorShower.draw(ctx);
      }
    }
  }

  private meteorShowerTimer: number = 0;
  private meteorShower: MeteorShower | null = null;
  private updatesPerSecond: number = 120;

  private update(): void {
    console.log('update:' + this.meteorShowerTimer);
    console.log('update:' + this.meteorShower?.meteors.length);
    if (this.meteorShowerTimer <= 0 || this.meteorShower === null) {
      const meteorSize = Math.floor(Math.random() * 10 + 10);
      const numberOfMeteors = Math.floor(Math.random() * 5 + 2);
      const meteorSpeed = Math.floor(Math.random() * 500 + 1000);
      const meteorAngle = Math.floor(Math.PI*1.2);
      const gravity = 5;
      this.meteorShower = new MeteorShower(
        window.innerWidth,
        window.innerHeight,
        numberOfMeteors,
        meteorSize,
        Math.floor(meteorSize / 4),
        meteorSpeed / this.updatesPerSecond,
        meteorAngle,
        gravity / this.updatesPerSecond,
        '#FFF'
      );
      this.meteorShowerTimer =
        Math.floor(Math.random() * 30 + 45) * this.updatesPerSecond;
    }
    this.meteorShowerTimer--;
    this.meteorShower?.update();
  }

  tickIntervalId: any;

  ngOnInit(): void {
    this.tickIntervalId = setInterval(() => this.tick(), 1000 / this.updatesPerSecond);
  }

  ngOnDestroy(): void {
    clearInterval(this.tickIntervalId);
  }

  tick(): void {
    this.update();
    this.draw();
  }

  
}
