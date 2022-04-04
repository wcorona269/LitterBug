import Bug from "./bug";
import Litter from "./litter";
import Dump from "./dump";

const LITTERCOUNT = 15;

class Game {

    constructor() {
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

    randomPos() {
        let x = Math.floor(Math.random() * )
    }
}
