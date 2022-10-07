import MovingObject from "./moving_object";
import Util from "./util"

const beetleup = new Image();
const beetleLeft = new Image();
beetleLeft.src = "./images/beetle/bl.png";
const beetleRight = new Image();
beetleRight.src = "./images/beetle/br.png";

const RADIUS = 16;
const COLOR = 'black';
const MAXSPEED = 10;

class Bug extends MovingObject {
    constructor(game) {
        super([500,375],[0, 0],RADIUS, COLOR, game);
        this.currentFrameIdx = 3;
        this.frameCount = 0;
        this.beetleRight = beetleRight;
        this.beetleLeft = beetleLeft;
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
			ctx.drawImage(this.beetleRight, this.pos[0] - 16, this.pos[1] - 16, 40, 40)	
        }
        else {
            ctx.drawImage(this.beetleLeft, this.pos[0] - 16, this.pos[1] - 16, 40, 40);	
        }
    }
};

export default Bug;