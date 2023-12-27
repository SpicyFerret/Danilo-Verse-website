class Meteor {
  x: number;
  y: number;
  width: number;
  xSpd: number;
  ySpd: number;
  gravity: number;
  speed: number;
  angle: number;
  img: CanvasImageSource;

  constructor(
    x: number,
    y: number,
    width: number,
    speed: number,
    angle: number,
    gravity: number
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.xSpd = speed * Math.cos(angle);
    this.ySpd = speed * Math.sin(angle);
    this.speed = speed;
    this.angle = angle;
    this.gravity = gravity;
    this.img = new Image();
    this.img.src = '../../assets/meteor.png';
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle - (Math.PI * 0.2));
    ctx.drawImage(this.img, 0, 0, this.width, this.width);
    ctx.restore();
  }

  update(): void {
    this.x += this.xSpd;
    this.y += this.ySpd;
    this.ySpd += this.gravity;
  }
}

export class MeteorShower {
  meteors: Meteor[];

  constructor(
    canvasWidht: number,
    canvasHeight: number,
    numberOfMeteors: number,
    motherMeteorSize: number,
    sonMeteorSize: number,
    speed: number,
    angle: number,
    gravity: number
  ) {
    this.meteors = [];

    // Create the meteors
    // The mother meteor is created first
    const x = canvasWidht + motherMeteorSize;
    const y = Math.random() * (canvasHeight * 0.8) - canvasHeight * 0.2;
    this.meteors.push(
      new Meteor(x, y, motherMeteorSize, speed, angle, gravity)
    );

    // Then the son meteors
    for (let i = 1; i < numberOfMeteors; i++) {
      const sizeVariation =
        sonMeteorSize + Math.random() * (motherMeteorSize - sonMeteorSize);
      const xVariation = x + Math.random() * (motherMeteorSize * 5);
      const yVariation = y + Math.random() * motherMeteorSize * 2;
      this.meteors.push(
        new Meteor(xVariation, yVariation, sizeVariation, speed, angle, gravity)
      );
    }

    // Shuffle the meteors
    for (let i = 0; i < numberOfMeteors; i++) {
      const j = Math.floor(Math.random() * i + 1);
      [this.meteors[i], this.meteors[j]] = [this.meteors[j], this.meteors[i]];
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.meteors.forEach((meteor) => meteor.draw(ctx));
  }

  update(): void {
    this.meteors.forEach((meteor) => {
      meteor.update();
      // Remove the meteor if it is out of the screen
      if(meteor.x + meteor.width < 0) {
        this.meteors.splice(this.meteors.indexOf(meteor), 1);
        console.log(this.meteors.length);
      }
    });
  }
}
