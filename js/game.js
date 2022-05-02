// TODO: Handle Player Movement
// TODO: Handle Collition
// TODO: Handle Box Movement

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    handleInput(e)
})

let gameboard = document.getElementById("sokobanBoard");


let playerX = 0
let playerY = 0



prepareGameBoard(tileMap01)



function prepareGameBoard(selectedTileMap) {

    for(y = 0; y < selectedTileMap.height; ++y) {
        for (x = 0; x < selectedTileMap.width; ++x) {
            let currentTile = document.createElement('div')
            currentTile.id = "x"+x+"y"+y;
            switch(selectedTileMap.mapGrid[y][x][0]) {
                case " ":
                    currentTile.classList.add(Tiles.Space);
                    break;
                case "W":
                    currentTile.classList.add(Tiles.Wall);
                    break;
                case "G":
                    currentTile.classList.add(Tiles.Goal)
                    break;
                case "B": 
                    currentTile.classList.add(Entities.Block)
                    break;
                case "P":
                    currentTile.classList.add(Entities.Character)
                    break;
                    
            }
            
            currentTile.classList.add("Tile")
            gameboard.appendChild(currentTile)
        }
    }
}

function handleInput(e) {
    if(e.key == "w") {
        console.log(e);
    }
    if(e.key == "a") {
        console.log(e);
    }
    if(e.key == "s") {
        console.log(e);
    }
    if(e.key == "d") {
        console.log(e);
    }
}

