import moduleTransformations from "@babel/preset-env/lib/module-transformations";
import GameView from "./scripts/game_view"



window.addEventListener('DOMContentLoaded', () => {
    const loadModal = document.querySelector("#loadModal");
    loadModal.showModal();
})

document.addEventListener("submit", () => {
    const nameEl = document.querySelector('#nameEl');
    const nameInput = document.querySelector('input[name="name-input"]').value;
    // console.log(nameInput);
    nameEl.innerHTML = nameInput;
    const timerEl = document.querySelector('#timerEl');
    const scoreEl = document.querySelector('#scoreEl');
    const bugBelly = document.querySelector('#bugBelly');
    const visitsEl = document.querySelector('#visitsEl');
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");

    canvasEl.width = 1000;
    canvasEl.height = 750;
    ctx.fillStyle = "grasstest_1.png"
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    const gameView = new GameView(ctx);
    gameView.start();
});

