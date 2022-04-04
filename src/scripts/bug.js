import MovingObject from "./moving_object";

const RADIUS = 10;
const COLOR = 'green';
const SPEEDS = [20, 15, 10, 5];

class Bug extends MovingObject {
    constructor(game) {
        super([200,200],
            [0, 0],
            RADIUS,
            COLOR,
            game);
    }

    draw() { 

    }
}


function animate() {
    
}
const bug = new Bug(100, 100, 30, green);

export default Bug;