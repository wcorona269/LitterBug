import MovingObject from "./moving_object";

const RADIUS = 10;
const COLOR = 'black';
// const SPEEDS = [20, 15, 10, 5];
const MAXSPEED = 20;

class Bug extends MovingObject {
    constructor(game) {
        super([200,200],[0, 0],RADIUS, COLOR, game);
    }

    travel(velocity) {
       this.vel[0] += velocity[0];
       this.vel[1] += velocity[1];
    }
}
export default Bug;