// TODO: Handle Player Movement
// TODO: Handle Collition
// TODO: Handle Box Movement

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    handleInput(e)
})

let gameboard = document.getElementById("sokobanBoard");


prepareGameBoard(tileMap01)



function prepareGameBoard(selectedTileMap) {

    for(y = 0; y < selectedTileMap.height; ++y) {
        for (x = 0; x < selectedTileMap.width; ++x) {
            let currentTile = document.createElement('div')
            currentTile.id = x+","+y;
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
                    currentTile.classList.add(Entities.Block);
                    currentTile.classList.add(Tiles.Space);
                    break;
                case "P":
                    currentTile.classList.add(Entities.Character);
                    currentTile.classList.add(Tiles.Space);
                    break;
                    
            }
            
            currentTile.classList.add("Tile")
            gameboard.appendChild(currentTile)
        }
    }
}

function handleInput(e) {
    console.log(e.key);
    if(e.key == "w" || e.key == "ArrowUp") {
       let playerCoords = document.getElementsByClassName(Entities.Character)[0].id;
       playerCoords = playerCoords.split(",");
       
       let targetTile = document.getElementById(String(playerCoords[0]) + "," + String(playerCoords[1] - 1));
       if(targetTile.classList.contains == Entities.Block) {

       }
       console.log(playerCoords);
       console.log(targetTileCOORds);
       console.log(targetTile);


    }
    if(e.key == "a" || e.key == "ArrowLeft") {

    }
    if(e.key == "s" || e.key == "ArrowDown") {
        
    }
    if(e.key == "d" || e.key == "ArrowRight") {
        
    }
}

