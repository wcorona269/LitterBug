import Game from "./game";

const DIM_X = 1000;
const DIM_Y = 750;

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
        this.time = this.game.time;
        // this.restart = this.restart.bind(this);
        this.timeout;
    }

    restart() {
        clearInterval(this.timeout);
        this.start();
    }

    start(){
        this.game.showRemainingLives();
        this.game.handlePause();
        this.bindKeyHandlers();
        requestAnimationFrame(this.render.bind(this));
    }
    
    bindKeyHandlers(){
        document.addEventListener("keydown", this.keydown.bind(this), false);
    }

    keydown(event){
        if (this.time === 0) return;
        switch(event.key){
            case 'w':
                if (this.bug.pos[1] > 75)
                {this.bug.travel([0, -5])};
                break;
            case 'a':
                if (this.bug.pos[0] > 75)    
                this.bug.travel([-5, 0]);
                break;
            case 's':
                if (this.bug.pos[1] < 650)    
                this.bug.travel([0, 5]);
                break;
            case 'd':
                if (this.bug.pos[0] < 900)
                this.bug.travel([5, 0]);
                break;
            case ' ':
                this.game.paused = !this.game.paused;
                this.game.handlePause();
                requestAnimationFrame(this.render.bind(this));
                break;
        }
    }

    render() {
        if (!(this.game.over) && !(this.game.paused)) {
            this.game.step();
            this.game.draw(this.ctx);
            requestAnimationFrame(this.render.bind(this));
        } else if (this.game.over && !(this.game.paused)) {
            cancelAnimationFrame(this.requestId);
        this.timeout = setTimeout(() => {
            const game = document.getElementById('game');
            game.style.visibility = "hidden";
            const canvasEl = document.getElementById("game-canvas");
            canvasEl.style.visibility = "hidden";
            const endModal = document.querySelector("#endModal");
            endModal.showModal();
            const scoreEl = document.querySelector('#scoreEl');
            const bugBelly = document.querySelector('#bugBelly');
            const visitsEl = document.querySelector('#visitsEl');
            const highScoreEl = document.querySelector('#highScoreEl');
            const timerEl = document.querySelector('#timerEl');
            if (scoreEl.innerHTML > highScoreEl.innerHTML) {
                highScoreEl.innerHTML = scoreEl.innerHTML
            }
            timerEl.innerHTML = 60;
            scoreEl.innerHTML = 0;
            bugBelly.innerHTML = 0;
            visitsEl.innerHTML = 0;
        }, 2000)};
    }
};

export default GameView;