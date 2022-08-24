import moduleTransformations from "@babel/preset-env/lib/module-transformations";
import GameView from "./scripts/game_view"



window.addEventListener('DOMContentLoaded', () => {
    const game = document.getElementById('game');
    game.style.visibility = "hidden";
    const loadModal = document.getElementById("loadModal");
    loadModal.showModal();
})

document.addEventListener("submit", () => {
    const game = document.getElementById('game');
    game.style.visibility = 'visible';
    const nameEl = document.querySelector('#nameEl');
    const nameInput = document.querySelector('input[name="name-input"]').value;
    nameEl.innerHTML = nameInput;
    
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
    canvasEl.style.visibility = "visible";
    canvasEl.width = 1000;
    canvasEl.height = 750;

    const gameView = new GameView(ctx);
    gameView.start();
});




