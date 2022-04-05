import MovingObject from "./moving_object";

const RADIUS = 10;
const COLOR = 'red';
const LITTER_TYPES = ['can', 'gum', 'pizzacrust', 'bottlecap', 'receipt', 'paperclip', 'box', 'car', 'cigarette butt', 'applecore']


class Litter extends MovingObject {
    constructor(pos, game) {
        super(pos, [1,1], RADIUS, COLOR, game)
    }



    // addLitter() {
    //     for (let i = 0; i < )
    // }
}

export default Litter;