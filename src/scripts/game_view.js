import Game from "./game";

const DIM_X = 1000;
const DIM_Y = 750;

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
    }


    start(){
        this.bindKeyHandlers();
        requestAnimationFrame(this.render.bind(this));
    }
    
    bindKeyHandlers(){
        document.addEventListener("keydown", this.keydown.bind(this), false);
    }

    keydown(event){
        switch(event.key){
            case 'w':
                if (this.bug.pos[1] > 40)
                {this.bug.travel([0, -3])};
                break;
            case 'a':
                if (this.bug.pos[0] > 40)    
                this.bug.travel([-3, 0]);
                break;
            case 's':
                if (this.bug.pos[1] < 700)    
                this.bug.travel([0, 3]);
                break;
            case 'd':
                if (this.bug.pos[0] < 975)
                this.bug.travel([3, 0]);
                break;
          
        }
    }

    render() {
        this.game.step();
        this.game.draw(this.ctx);
        requestAnimationFrame(this.render.bind(this));
    };
}


export default GameView;