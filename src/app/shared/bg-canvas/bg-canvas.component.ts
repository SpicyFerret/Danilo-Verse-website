import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MeteorShower } from './meteor';
import { StarredSky } from './starred-sky';

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
    this.starredSky = new StarredSky(window.innerWidth, window.innerHeight);
    this.draw();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.starredSky?.reSize(window.innerWidth, window.innerHeight);
    this.draw();
  }

  private draw(): void {
    const canvas = this.bgCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (this.starredSky) {
        this.starredSky.draw(ctx);
      }

      if (this.meteorShower) {
        this.meteorShower.draw(ctx);
      }
    }
  }

  private starredSky: StarredSky | null = null;
  private meteorShowerTimer: number = 0;
  private meteorShower: MeteorShower | null = null;
  private updatesPerSecond: number = 60;

  private update(): void {
    if (this.starredSky) {
      this.starredSky.update();
    }

    if (this.meteorShowerTimer <= 0 || this.meteorShower === null) {
      const meteorSize = Math.floor(Math.random() * 200 + 50);
      const numberOfMeteors = Math.floor(Math.random() * 5 + 2);
      const meteorSpeed = Math.floor(
        (Math.random() * 100000) / meteorSize + 3000
      );
      const meteorAngle = Math.floor(Math.PI * 1.2);
      const gravity = 2;
      this.meteorShower = new MeteorShower(
        window.innerWidth,
        window.innerHeight,
        numberOfMeteors,
        meteorSize,
        Math.floor(meteorSize / 3),
        meteorSpeed / this.updatesPerSecond,
        meteorAngle,
        gravity / this.updatesPerSecond
      );
      this.meteorShowerTimer =
        Math.floor(Math.random() * 20 + 5) * this.updatesPerSecond;
    }
    this.meteorShowerTimer--;
    this.meteorShower?.update();
  }

  tickIntervalId: any;

  ngOnInit(): void {
    this.tickIntervalId = setInterval(
      () => this.tick(),
      1000 / this.updatesPerSecond
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.tickIntervalId);
  }

  tick(): void {
    this.update();
    this.draw();
  }
}
