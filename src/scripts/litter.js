import MovingObject from "./moving_object";

const litter = new Image();
litter.src = "../../images/recycle_items.png";
const RADIUS = 13;
const COLOR = 'lightblue';

const LITTERTYPES = ['water', 'jug', 'box', 'news', 'coke', 'beer', 'sodacan', 'stycup', 'pizza',];


class Litter extends MovingObject {
    constructor(pos, game) {
        super(pos, [0,0], RADIUS, COLOR, game)
        this.value = 5;
        this.title = LITTERTYPES[Math.floor(Math.random()*LITTERTYPES.length)];
    }
    draw (ctx) {
        ctx.drawImage(litter, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5,
            30, 30);
    }
};


export default Litter; 