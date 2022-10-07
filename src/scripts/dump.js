import MovingObject from "./moving_object";

const left = new Image();
left.src = "./images/dump/left.png";
const right = new Image();
right.src = "./images/dump/right.png";

const RADIUS = 35;
const COLOR = 'purple'

class Dump extends MovingObject{
    constructor(pos, game) {
        super(pos, [0, 0], RADIUS, COLOR, game);
    }

    draw (ctx) {
        if (this.pos[0] === 40) {
            ctx.drawImage(left,this.pos[0] - 30, this.pos[1] - 40, 80, 80);
        } else {
            ctx.drawImage(right,this.pos[0] - 30, this.pos[1] - 40, 80, 80);
        }
    }
}

export default Dump;

