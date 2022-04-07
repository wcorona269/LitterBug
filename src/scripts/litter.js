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
stycup.src = "../../images/litter/styrocup.png";

const pizza = new Image();
pizza.src = "../../images/litter/pizza.png";


const RADIUS = 13;
const COLOR = 'lightblue';

const LITTERNAMES = ['water', 'can', 'coke', 'beer', 'stycup', 'box', 'news', 'jug', 'pizza'];
const LITTERTYPES = {'water':1, 'can':1, 'coke':2, 'beer':2, 'stycup':3,'news':3, 'box':4, 'jug':4, 'pizza':5};


class Litter extends MovingObject {
    constructor(pos, game) {
        super(pos, [0,0], RADIUS, COLOR, game)
        this.title = LITTERNAMES[Math.floor(Math.random()*LITTERNAMES.length)];
        this.value = LITTERTYPES[this.title];
        console.log(this.value);
    }
    draw (ctx) {
        if (this.title === "water") {
            ctx.drawImage(water, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "can") {
            ctx.drawImage(can, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "coke") {
            ctx.drawImage(coke, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "beer") {
            ctx.drawImage(beer, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "stycup") {
            ctx.drawImage(stycup, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "box") {
            ctx.drawImage(box, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "news") {
            ctx.drawImage(news, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else  if (this.title === "jug") {
            ctx.drawImage(jug, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        } else {
            ctx.drawImage(pizza, 5, 5, 45, 30, this.pos[0] - 5, this.pos[1] - 5, 30, 30);
        };
    }
};


export default Litter; 