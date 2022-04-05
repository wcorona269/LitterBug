import MovingObject from "./moving_object";
import Util from "./util"

const RADIUS = 10;
const COLOR = 'black';
// const SPEEDS = [20, 15, 10, 5];
const MAXSPEED = 6;

class Bug extends MovingObject {
    constructor(game) {
        super([500,375],[0, 0],RADIUS, COLOR, game);
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

    isCollidedWith(otherObject) {
        const centerDist = Util.dist(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
      };
}
export default Bug;