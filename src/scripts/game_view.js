import Game from "./game";

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
                this.bug.travel([0, -3]);
                break;
                case 'a':
                this.bug.travel([-3, 0]);
                break;
                case 's':
                this.bug.travel([0, 3]);
                break;
                case 'd':
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