import MovingObject from "./moving_object";

const RADIUS = 10;
const COLOR = 'green';
const SPEEDS = [20, 15, 10, 5];


class Bug extends MovingObject {
    constructor(game) {
        super([], [0, 0], RADIUS, COLOR, game);
    }

    draw() {
        
    }
}

const bug = new Bug(100, 100, 30, green);

addEventListener('keydown', (key) => {
    switch (key) {
        case 'a':
            console.log('left');
        case 'd':
            console.log('right');
        case 'w':
            console.log('up');
        case 's':
            console.log('down');
    }
});

function animate() {

}

export default Bug;