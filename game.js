import Map from "./tiles.js";
import Player from "./player.js";

const gameContainer = document.getElementById("game-container");
const tileSize = 50;
const numRows = 5;
const numCols = 5;

const tiles = [
    "water", "water", "water", "water", "water",
    "water", "grass", "grass", "grass", "water",
    "water", "grass", "dirt", "grass", "water",
    "water", "grass", "grass", "grass", "water",
    "water", "water", "water", "water", "water"
];

const player = new Player(2, 2);
const map = new Map(gameContainer, tiles, numRows, numCols);

map.drawMap(player);

document.addEventListener("keydown", (e) => {
    const { row, col } = player;

    let moved = false;
    switch (e.key) {
        case "ArrowUp":
            moved = player.move(row - 1, col, numRows, numCols, tiles);
            break;
        case "ArrowDown":
            moved = player.move(row + 1, col, numRows, numCols, tiles);
            break;
        case "ArrowLeft":
            moved = player.move(row, col - 1, numRows, numCols, tiles);
            break;
        case "ArrowRight":
            moved = player.move(row, col + 1, numRows, numCols, tiles);
            break;
    }

    if (moved) {
        map.drawMap(player);
    }
});

