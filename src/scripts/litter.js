import MovingObject from "./moving_object";

const RADIUS = 13;
const COLOR = 'lightblue';

const LITTER_TYPES = ['can', 'gum', 'pizzacrust', 'bottlecap', 'receipt', 'paperclip', 'box', 'car', 'cigarette butt', 'applecore']


class Litter extends MovingObject {
    constructor(pos, game) {
        super(pos, [0,0], RADIUS, COLOR, game)
    }
}

export default Litter; 