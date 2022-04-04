import Game from "./game";

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.bug = this.game.bug;
    }

    render() {
        this.game.draw(this.ctx);
    };



    // keydown(e) {
    //     switch (e.key) {
    //         case 'a':
    //             console.log('left');
    //         case 'd':
    //             console.log('right');
    //         case 'w':
    //             console.log('up');
    //         case 's':
    //             console.log('down');
    //     }
    // }

    // start() {

    // }
}





export default GameView;