class Player {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    move(row, col, numRows, numCols, tiles) {
        if (row < 0 || row >= numRows || col < 0 || col >= numCols) return false;

        const tileType = tiles[row * numCols + col];
        if (tileType === "water") {
            return false;
        }
        if(tileType === "dirt") {
            console.log("hi");
        }
        this.row = row;
        this.col = col;
        return true;
    }
}

export default Player;
