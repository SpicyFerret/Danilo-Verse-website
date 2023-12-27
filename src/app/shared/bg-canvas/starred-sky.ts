
export class StarredSky {

    private width: number;
    private height: number;
    private stars: Star[] = [];

    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        console.log(this.width, this.height);
    }

    public reSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
        console.log(this.width, this.height);
    }

    public update(): void {
        this.stars.forEach(star => star.update());
        this.stars = this.stars.filter(star => star.getLifespan() > 0);
        if (this.stars.length < 1000) {
            this.stars.push(new Star(Math.random() * this.width, Math.random() * this.height, Math.random() * 4 + 1));
        }
    }


    public draw(ctx: CanvasRenderingContext2D): void {
        // Create gradient
        let grd = ctx.createRadialGradient(this.width / 2, this.height, this.height, this.width / 2, this.height, 0);
        grd.addColorStop(0, 'black');
        grd.addColorStop(0.5, '#000030');
        grd.addColorStop(1, '#500050');

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, this.width, this.height);
        this.stars.forEach(star => star.draw(ctx));
    }
}

class Star{
    private x: number;
    private y: number;
    private width: number;
    private lifespan: number;

    constructor(x: number, y: number, width: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.lifespan = width * 10;
    }

    getLifespan(): number {
        return this.lifespan;
    }

    update(): void {
        this.lifespan--;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.width, this.width);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(this.x/2, -this.y/2, this.width, this.width);
        ctx.restore();
    }

}