class Tiles {
    constructor(gameContainer, tiles, numRows, numCols) {
        this.gameContainer = gameContainer;
        this.tiles = tiles;
        this.numRows = numRows;
        this.numCols = numCols;
    }

    createTile(row, col, type) {
        const tile = document.createElement("div");
        tile.classList.add("tile", type);
        tile.style.gridColumnStart = col + 1;
        tile.style.gridRowStart = row + 1;
        this.gameContainer.appendChild(tile);
        return tile;
    }

    drawMap(player) {
        this.gameContainer.innerHTML = "";
        for (let row = 0; row < this.numRows; row++) {
            for (let col = 0; col < this.numCols; col++) {
                const type = this.tiles[row * this.numCols + col];
                this.createTile(row, col, type);
            }
        }
        this.createTile(player.row, player.col, "player");
    }
}

export default Tiles;
