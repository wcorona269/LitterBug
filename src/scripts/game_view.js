import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
    }

    

    keydown(e){
        switch(e.key){
            case 'w':
                this.player.travel([0, -3]);
                break;
            case 'a':
                this.player.travel([-3, 0]);
                break;
            case 's':
                this.player.travel([0, 3]);
                break;
            case 'd':
                this.player.travel([3, 0]);
                break;
        }
    }
}



