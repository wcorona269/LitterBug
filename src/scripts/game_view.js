import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
    }

    addEventListener('keydown', (key) => {
        switch (key) {
            case 'a':
                console.log('left');
            case 'd':
                console.log('right');
            case 'w':
                console.log('up');
            case 's':
                console.log('down');
        }
    };
};


export default GameView;