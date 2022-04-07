import MovingObject from "./moving_object";


const water = new Image();
water.src = "../../images/litter/water.png";

const jug = new Image();
jug.src = "../../images/litter/jug.png";

const box = new Image();
box.src = "../../images/litter/box.png";

const news = new Image();
news.src = "../../images/litter/news.png";

const coke = new Image();
coke.src = "../../images/litter/coke.png";

const beer = new Image();
beer.src = "../../images/litter/beer.png";

const can = new Image();
can.src = "../../images/litter/can.png";

const stycup = new Image();
stycup.src = "../../images/litter/stycup.png";

const pizza = new Image();
pizza.src = "../../images/litter/pizza.png";


const RADIUS = 13;
const COLOR = 'lightblue';

const LITTERTYPES = ['water', 'can', 'coke', 'beer', 'stycup', 'box', 'news', 'jug', 'pizza'];


class Litter extends MovingObject {
    constructor(pos, game) {
        super(pos, [0,0], RADIUS, COLOR, game)
        this.value;
        this.title = LITTERTYPES[Math.floor(Math.random()*LITTERTYPES.length)];

    }
    draw (ctx) {
        ctx.drawImage(water, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5,
            30, 30);
    }
};


export default Litter; 