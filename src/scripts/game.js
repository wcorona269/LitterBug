import Bug from "./bug";
import Litter from "./litter";
import Dump from "./dump";

const LITTERCOUNT = 15;

class Game {
    constructor() {
        this.tummy = [];
        this.litters = [];
        this.bug = new Bug(this);
        this.addLitter();
        this.addDump();
        this.score = 0;
    }

    addLitter() {
        for (let i = 0; i < LITTERCOUNT; i++) {
            let litter = new Litter(this.randomPos(), this);
            this.litters.push(litter);
        }
    }

    addNewLitter() {
        while (this.litters.length < LITTERCOUNT) {
            let newLitter = new Litter(this.randomPos());
            this.litters.push(newLitter);
        }
    }

    addDump();


    randomPos() {
    }

    remove (obj) {
    }
}

export default Game;