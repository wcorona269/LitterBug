import Bug from "./bug";
import Litter from "./litter";
import Dump from "./dump";
import { remove } from "immutable";

const LITTERCOUNT = 15;
const GAMECOLOR = "lightgreen"
const DECELERATOR = 0.9;
const DIM_X = 1000;
const DIM_Y = 750;
const DUMPSPOTS = [[25,25],[25,725],[975,25],[975,725]]

class Game {
    constructor() {
        this.bug = new Bug(this);
        this.belly = [];
        this.litters = [];
        this.dumps = [];
        this.currentLitter = [];
        this.score = 0;
        this.dumpVisits = 0;
        this.gameOver = false;
        this.addLitter();
        this.addDump();
    }

    allObjects() {
        let arr = this.litters.concat([this.bug], this.dumps);
        return arr;
        // later will be: let arr = this.litters.concat([this.bug], this.belly)
    }

    draw(ctx) {
        ctx.clearRect(0, 0, DIM_X, DIM_Y);
        ctx.fillStyle = GAMECOLOR;
        ctx.fillRect(0, 0, DIM_X, DIM_Y);

        this.allObjects().forEach(el => {
            el.draw(ctx);
        });

        ctx.font = "20px Helvetica";
        ctx.fillStyle = GAMECOLOR;
    };

    step() {
        this.move();
        this.checkCollisions();
        // this.addNewLitter();
    }

    randomPos() {
        let x = Math.floor(Math.random() * (950 - 50) + 50);
        let y = Math.floor(Math.random() * (700 - 50) + 50);

        return [x,y];
    }

    addLitter() {
        for (let i = 0; i < LITTERCOUNT; i++) {
            let litter = new Litter(this.randomPos(), this);
            this.litters.push(litter);
        }
    }

    addNewLitter() {
        while (this.litters.length < LITTERCOUNT) {
            let newLitter = new Litter(this.randomPos(), this);
            this.litters.push(newLitter);
        }
    }

    randCorner() {
        return DUMPSPOTS[Math.floor(Math.random()*DUMPSPOTS.length)];
    }

    addDump() {
        let newDump = new Dump(this.randCorner(), this);
        debugger;
        if (!this.dumps.length) {
            this.dumps.push(newDump);
        }
        else {
            let lastPos = this.dumps[0].pos; 
            this.dumps = [];
            this.dumps.push(newDump);
        };
    }

    checkCollisions(obj) {
        const allObjects = this.allObjects();
        allObjects.forEach(obj => {
            if (obj instanceof Litter && this.belly.length < 5 && this.bug.isCollidedWith(obj)) {
                this.belly.push(obj);
                this.remove(obj);
            } 
            else if (obj instanceof Dump && this.bug.isCollidedWith(obj) && this.belly.length > 0) {
                this.dumpLitter();
                this.addNewLitter();
                this.addDump();
            }
        });
    }

    dumpLitter() {
        this.belly.forEach(lit => {
            this.score += lit.value;
            this.belly.splice(this.belly.indexOf(lit), 1);
        })
    }

    remove (obj) {
        if (obj instanceof Litter) {
            this.litters.splice(this.litters.indexOf(obj), 1);
        }
    }

    move(){
        this.allObjects().forEach(obj => {
            obj.move();
            if (obj instanceof Bug) {
                obj.vel[0] *= DECELERATOR;
                obj.vel[1] *= DECELERATOR;
            }
        })
    }
}

export default Game;