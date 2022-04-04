import Bug from "./bug";
import Litter from "./litter";
import Dump from "./dump";

const LITTERCOUNT = 15;
const GAMECOLOR = "lightgreen"
const DIM_X = 1000;
const DIM_Y = 750;

class Game {
    constructor() {
        this.bug = new Bug(this);
        this.belly = [];
        this.litters = [];
        this.currentLitter = [];
        this.score = 0;
        this.dumpVisits = 0;
        // this.addLitter();
        // this.addDump();
    }

    allobjects() {
        let arr = [this.bug];
        return arr;

        // later will be: let arr = this.litters.concat([this.bug], this.belly)
    }

    draw(ctx) {
        ctx.clearRect(0, 0, DIM_X, DIM_Y);
        ctx.fillStyle = GAMECOLOR;
        ctx.fillRect(0, 0, DIM_X, DIM_Y);

        this.allobjects().forEach(el => {
            el.draw(ctx);
        });

        ctx.font = "20px Helvetica";
        ctx.fillStyle = GAMECOLOR;
    };

    // addLitter() {
    //     for (let i = 0; i < LITTERCOUNT; i++) {
    //         let litter = new Litter(this.randomPos(), this);
    //         this.litters.push(litter);
    //     }
    // }

    // addNewLitter() {
    //     while (this.litters.length < LITTERCOUNT) {
    //         let newLitter = new Litter(this.randomPos());
    //         this.litters.push(newLitter);
    //     }
    // }

    // addDump();

    // randomPos() {

    // }

    // remove (obj) {
    // }
}

export default Game;