import MovingObject from "./moving_object";

const bin = new Image();
bin.src = "./images/garbage.png";

const RADIUS = 30;
const COLOR = 'purple'

class Dump extends MovingObject{
    constructor(pos, game) {
        super(pos, [0, 0], RADIUS, COLOR, game);
    }

    draw (ctx) {
        ctx.drawImage(bin,this.pos[0] - 30, this.pos[1] - 50, 50, 80);
    }
    // context.drawImage(img,x,y,width,height)
    // function respawns on collision
}

export default Dump;

