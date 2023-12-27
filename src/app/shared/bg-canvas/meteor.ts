

class Meteor {
    x: number;
    y: number;
    width: number;
    xSpd: number;
    ySpd: number;
    gravity: number;
    color: string;
    speed: number;
    angle: number;
    
    constructor(x: number, y: number, width: number, speed: number, angle: number, gravity: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.xSpd = speed*Math.cos(angle);
        this.ySpd = speed*Math.sin(angle);
        this.speed = speed;
        this.angle = angle;
        this.gravity = gravity;
        this.color = color;
    }
    
    
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.width / 2, this.y + this.speed*20);
        ctx.lineTo(this.x + this.width / 2, this.y + this.speed*20);
        
        ctx.closePath();
        ctx.fill();
    }
    
    update(): void {
        this.x += this.xSpd;
        this.y += this.ySpd;
        this.ySpd += this.gravity;
    }
}

export class MeteorShower {
    meteors: Meteor[];

    constructor(canvasWidht: number, canvasHeight: number, numberOfMeteors: number, motherMeteorSize: number, sonMeteorSize: number, speed: number, angle: number, gravity: number, color: string) {
        this.meteors = [];
        
        // Create the meteors
        // The mother meteor is created first
        const x = canvasWidht + motherMeteorSize;
        const y = Math.random() * (canvasHeight*0.8);
        this.meteors.push(new Meteor(x, y, motherMeteorSize, speed, angle, gravity, color));

        // Then the son meteors
        for (let i = 1; i < numberOfMeteors; i++) {
            const sizeVariation = sonMeteorSize + Math.random() * (motherMeteorSize - sonMeteorSize);
            const xVariation = x + Math.random() * (motherMeteorSize*6);
            const yVariation = y + (Math.random() * motherMeteorSize*4);
            this.meteors.push(new Meteor(xVariation, yVariation, sizeVariation, speed, angle, gravity, color));
        }

        // Shuffle the meteors
        for (let i = 0; i < numberOfMeteors; i++) {
            const j = Math.floor(Math.random() * i+1);
            [this.meteors[i], this.meteors[j]] = [this.meteors[j], this.meteors[i]];
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.meteors.forEach(meteor => meteor.draw(ctx));
    }

    update(): void {
        this.meteors.forEach(meteor => meteor.update());
    }

}