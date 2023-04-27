import Map from "./tiles.js";
import Player from "./player.js";

const gameContainer = document.getElementById("game-container");
const tileSize = 50;
const numRows = 5;
const numCols = 5;

function generateRandomTiles(numRows, numCols) {
    const tileTypes = ["water", "grass", "dirt"];
    const tiles = new Array(numRows * numCols).fill("water");

    let currentRow = 0;
    let currentCol = 0;

    // Set the starting tile (top-left corner) to be either grass or dirt
    tiles[0] = tileTypes[Math.floor(Math.random() * (tileTypes.length - 1)) + 1];

    while (currentRow < numRows) {
        const tileType = Math.random() < 0.5 ? "grass" : "dirt";
        tiles[currentRow * numCols + currentCol] = tileType;

        if (Math.random() < 0.5 && currentCol < numCols - 1) {
           
            currentCol++;
        } else {
            
            currentRow++;
        }
    }

   
    for (let i = 0; i < numRows * numCols; i++) {
        if (tiles[i] === "water") {
            const randomIndex = Math.floor(Math.random() * tileTypes.length);
            tiles[i] = tileTypes[randomIndex];
        }
    }

    return tiles;
}



const tiles = generateRandomTiles(numRows, numCols);
const player = new Player(0, 0);
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
