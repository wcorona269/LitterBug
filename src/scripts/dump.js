import MovingObject from "./moving_object";

// CORNERS = four position options for each screen corner
const RADIUS = 25;
const COLOR = 'purple'

class Dump extends MovingObject{
    constructor(pos, game) {
        super(pos, [0, 0], RADIUS, COLOR, game);
    }

   

    // function respawns on collision
}

export default Dump;

