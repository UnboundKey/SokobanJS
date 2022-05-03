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
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
       let targetTile = GetTile(0,-1);
       
        if(targetTile.classList.contains(Entities.Block)) {
            console.log("Block Found");
            let blockDestination = GetTile(0,-2);
            if (blockDestination.classList.contains(Tiles.Space)) {
                Move(blockDestination, targetTile, Entities.Block)
            }
        }

       CanMove(targetTile, playerTile);
       console.log(targetTile);
               
    }
    if(e.key == "a" || e.key == "ArrowLeft") {
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
        let targetTile = GetTile(-1,0);
 
        console.log(targetTile);
        CanMove(targetTile, playerTile);
        
    }
    if(e.key == "s" || e.key == "ArrowDown") {
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
        let targetTile = GetTile(0,+1);
 
        console.log(targetTile);
        CanMove(targetTile, playerTile);
    }
    if(e.key == "d" || e.key == "ArrowRight") {
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
        let targetTile = GetTile(+1,0);
 
        console.log(targetTile);
        CanMove(targetTile, playerTile);
    }
}

function CanMove(targetTile, playerTile) {
    if (!targetTile.classList.contains(Tiles.Wall)) {
        playerTile.classList.remove(Entities.Character);
        targetTile.classList.add(Entities.Character);
    }
}

function Move(DestinationTile, TileToMove, TileClass) {
    if (!DestinationTile.classList.contains(Tiles.Wall)) {
        TileToMove.classList.remove(TileClass);
        DestinationTile.classList.add(TileClass);
    }
}

function GetTile(PlayerRelativeX, PlayerRelativeY) {
    let playerCoords = document.getElementsByClassName(Entities.Character)[0].id;
    playerCoords = playerCoords.split(",");
    let targetCoords = Number(playerCoords[0])+ PlayerRelativeX + "," + String(Number(playerCoords[1])+ PlayerRelativeY);
    let targetTile = document.getElementById(targetCoords);
    return targetTile;
}

