import MovingObject from "./moving_object";

const RADIUS = 10;
const COLOR = 'red';
const LITTER_TYPES = ['can', 'box', 'tv', 'couch', 'car']


class Litter extends MovingObject {
    constructor(pos, game) {
        super(pos, [1,1], RADIUS, COLOR, game)
    }



    addLitter() {
        // for (let i = 0; i < )
    }
}

export default Litter;