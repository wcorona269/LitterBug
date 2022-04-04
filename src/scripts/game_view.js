import { start } from "repl";
import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
    }


    keydown(e) {
        switch (e.key) {
            case 'a':
                console.log('left');
            case 'd':
                console.log('right');
            case 'w':
                console.log('up');
            case 's':
                console.log('down');
        }
    }

    // start() {

    // }
}


export default GameView;