import MovingObject from "./moving_object";

const beetleup = new Image();
beetleup.src = "./images//beetle/bup.png";

const RADIUS = 20;
const COLOR = "black";
const MAXSPEED = 20;

class Enemy extends MovingObject {
	constructor(game) {
		super([500,375],[1, 1],RADIUS, COLOR, game);
		this.currentFrameIdx = 3;
		this.frameCount = 0;
		this.speed = [2, 3, 4];
		this.speedIdx = 0;
		this.beetleup = beetleup;
	}

	findBug(bug) {
		let pos = bug.pos;
		let x = pos[0] - this.pos[0];
		let y = pos[1] - this.pos[1];

		this.vel[0] = this.speed[this.speedIdx] * (x / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
		this.vel[1] = this.speed[this.speedIdx] * (y / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
	}

	draw(ctx) {
		ctx.drawImage(this.beetleup, this.pos[0] - 10, this.pos[1] - 10, 60, 60);
	}
}


export default Enemy;