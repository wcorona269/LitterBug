import Game from "./game";

const DIM_X = 1000;
const DIM_Y = 750;

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
        this.over = false;
    }


    start(){
        this.bindKeyHandlers();
        // this.end();
        requestAnimationFrame(this.render.bind(this));
    }

    end() {
        if (this.game.time === 0) {
            this.over = true;
        }
    }
    
    bindKeyHandlers(){
        document.addEventListener("keydown", this.keydown.bind(this), false);
    }

    keydown(event){
        if (this.game.time === 0) return;
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
        }
    }

    render() {
        if (!this.over) {
        this.game.step();
        this.game.draw(this.ctx);
        this.end();
        requestAnimationFrame(this.render.bind(this));
        } else {
            setTimeout(() => {
                const statsEl = document.querySelector(".p-container");
                statsEl.style.visibility = "hidden";
                const canvasEl = document.getElementById("game-canvas");
                canvasEl.style.visibility = "hidden";
                const endModal = document.querySelector("#endModal");
                endModal.showModal();
                const scoreEl = document.querySelector('#scoreEl');
                const bugBelly = document.querySelector('#bugBelly');
                const visitsEl = document.querySelector('#visitsEl');
                scoreEl.innerHTML = 0;
                bugBelly.innerHTML = 0;
                visitsEl.innerHTML = 0;
            }, 2000);
        }
    };
}


export default GameView;