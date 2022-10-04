import MovingObject from "./moving_object";
import Util from "./util"

const beetleup = new Image();
beetleup.src = "./images/beetle/bup.png";
const bd = new Image();
bd.src = "./images/beetle/bd.png";
const bl = new Image();
bl.src = "./images/beetle/bl.png";
const br = new Image();
br.src = "./images/beetle/br.png";

const RADIUS = 16;
const COLOR = 'black';
const MAXSPEED = 10;

class Bug extends MovingObject {
    constructor(game) {
        super([500,375],[0, 0],RADIUS, COLOR, game);
        this.currentFrameIdx = 3;
        this.frameCount = 0;
        this.br = br;
        this.bl = bl;
    }

    travel(velocity){
        if(this.vel[0] + velocity[0] <= MAXSPEED && 
            this.vel[0] + velocity[0] >= MAXSPEED * -1){
            this.vel[0] += velocity[0];
        }
        if(this.vel[1] + velocity[1] <= MAXSPEED &&
            this.vel[1] + velocity[1] >= MAXSPEED * -1){
            this.vel[1] += velocity[1];
        }
    }

    draw(ctx){
        if(this.vel[0] >= 0){
            ctx.drawImage(this.br, 13, 0 + 26 * this.currentFrameIdx, 26, 26, this.pos[0] - 13, this.pos[1] - 13, 26, 26);
        }
        else if(this.vel[0] < 0){
            ctx.drawImage(this.bl, 80, 0 + 26 * this.currentFrameIdx, 26, 26, this.pos[0] - 13, this.pos[1] - 13, 26, 26);
        }
    }
};

export default Bug;