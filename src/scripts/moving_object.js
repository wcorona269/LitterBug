const DIM_X = 1000;
const DIM_y = 750;

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
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
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

    dist(pos1, pos2) {
        return Math.sqrt(
          Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    }

    isCollidedWith(otherObject) {
        const centerDist = this.dist(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
    };

    isOutOfBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
          (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
    };
}

export default MovingObject;

