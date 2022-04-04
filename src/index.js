import GameView from "./scripts/game_view"

window.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");

    canvasEl.width = 1000;
    canvasEl.height = 750;
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    const gameView = new GameView(ctx);
    gameView.render();
});

