const DIM_X = 1000;
const DIM_Y = 750;

class MovingObject {
    constructor(pos, vel, radius, color, game){
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
        this.game = game;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }

    move(){
        let x = this.pos[0] + this.vel[0]
        let y = this.pos[1] + this.vel[1];

        this.pos = [x, y]
    }
}

export default MovingObject;

