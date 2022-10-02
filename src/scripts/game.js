import Bug from "./bug";
import Enemy from "./enemy";
import Litter from "./litter";
import Dump from "./dump";

const background = new Image();
background.src = "./images/grasstest_1.png";

const LITTERCOUNT = 15;
const DECELERATOR = 0.9;
const DIM_X = 1000;
const DIM_Y = 750;
const DUMPSPOTS = [[40,40],[40,710],[945,40],[945,710]]

class Game {
    constructor() {
        this.bug = new Bug(this);
        this.enemy = [];
        this.lives = 3;
        this.belly = [];
        this.litters = [];
        this.dumps = [];
        this.currentLitter = [];
        this.score = 0;
        this.dumpVisits = 0;
        this.over = false;
        this.addLitter();
        this.addDump();
        this.startCountdown(60);
        this.time = 60;
        this.paused = false;
        // this.restart = this.restart.bind(this);
    }

    startCountdown(seconds) {
        this.time = 60;
        let counter = seconds;
        let timerEl = document.querySelector('#timerEl');

    //  clearInterval
        setInterval(() => {
          if (counter > -1 && !(this.paused) && !(this.over)) {
          timerEl.innerHTML = counter;
          this.time = counter;
          counter--;
        }}, 1000);
    }

    handlePause(){
        let pauseMenu = document.querySelector(".pause-menu");
        if (this.paused) {
            pauseMenu.classList.remove('hidden');
        } else {
            pauseMenu.classList.add('hidden');
        }
    }
    
    findBug() {
        if (this.enemy.length) {
            this.enemy[0].findBug(this.bug);
        }
    }

    addEnemy() {
        if (this.dumpVisits > 0 && !(this.enemy.length)) {
            this.enemy.push(new Enemy(this))
        }
    }

    updateEnemySpeed() {
        if (this.enemy.length) {
            if (this.score >= 35) {
                this.enemy[0].speedIdx = 1;
            }
    
            if (this.score > 70) {
                this.enemy[0].speedIdx = 2;
            }
        }
    }

    allObjects() {
        let arr = this.litters.concat([this.bug], this.enemy, this.dumps);
        return arr;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, DIM_X, DIM_Y);
        ctx.drawImage(background, x, y, background.width * scale, background.height * scale);
        var scale = Math.max(1000 / background.width, 750 / background.height);
        var x = (1000 / 2) - (background.width / 2) * scale;
        var y = (750 / 2) - (background.height / 2) * scale;
        
        this.allObjects().forEach(el => {
            el.draw(ctx);
        });
    };

    showRemainingLives() {
        if (this.lives) {
            this.bug.pos = [500, 375];

            let livesCount = document.querySelector('#livesCount');

            while (livesCount.firstChild) {
                livesCount.removeChild(livesCount.firstChild);
            }
    
            for (let i = 0; i < this.lives; i++) {
                livesCount.appendChild(document.createElement('img')).src = "./images/beetle/br.png"
            }
        } else {
            this.over = true;
        }
    }

    step() {
        if (!(this.time) || !(this.lives)) {
            this.over = true;
        }
        
        this.checkCollisions();
        this.addEnemy();
        this.updateBelly();
        this.handlePause();
        this.move();
        this.updateEnemySpeed();
        this.findBug();
    }

    updateBelly() {
        bugBelly.innerHTML = this.belly.length;
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

    generateDump() {
        return new Dump(this.randCorner(), this)
    }


    ensureNewPos() {
        let newDump = this.generateDump();
        let currDump = this.dumps[0];
        let curr_x = currDump.pos[0];
        let curr_y = currDump.pos[1];
        let new_x = newDump.pos[0];
        let new_y = newDump.pos[1];
        while (curr_x === new_x && curr_y === new_y){
            newDump = this.generateDump();
            new_x = newDump.pos[0];
            new_y = newDump.pos[1];
        }

        return newDump;
    }

    addDump() {
        if (!this.dumps.length) {
            var newDump = this.generateDump();
            this.dumps.push(newDump);
        }
        else {
            let newDump = this.ensureNewPos();
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
                this.dumpVisits += 1;
                visitsEl.innerHTML = this.dumpVisits;
                this.dumpLitter();
                this.addNewLitter();
            }
            else if (obj instanceof Enemy && this.bug.isCollidedWith(obj)) {
                this.lives--;
                this.showRemainingLives();
            }
        });
    }

    dumpLitter() {
        while (this.belly.length) {
            var lit = this.belly[0];
            this.score += lit.value;
            scoreEl.innerHTML = this.score;
            finalScoreEl.innerHTML = this.score;
            this.belly.shift();
            this.addDump();
        }
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