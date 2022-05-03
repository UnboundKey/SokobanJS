// TODO: Handle Player Movement[~]
// TODO: Handle Collition [~]
// TODO: Handle Box Movement [X]

function gameloop(e) {
    e.preventDefault();
    handleInput(e)
    CheckWin()
}

document.addEventListener("keydown", gameloop)



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
                    currentTile.classList.add(Tiles.Space);
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

       //If there is a block in the way of the player, try to move it, if there is room
        if(targetTile.classList.contains(Entities.Block)) {
            console.log("Block Found");
            let blockDestination = GetTile(0,-2);
            if (blockDestination.classList.contains(Tiles.Space) && !blockDestination.classList.contains(Entities.Block)) {
                Move(blockDestination, targetTile, Entities.Block)
                Move(targetTile, playerTile, Entities.Character)
            }
        } else {
            PlayerMove(targetTile, playerTile);
        }

       console.log(targetTile);
               
    }
    if(e.key == "a" || e.key == "ArrowLeft") {
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
        let targetTile = GetTile(-1,0);

        //If there is a block in the way of the player, try to move it, if there is room
       if(targetTile.classList.contains(Entities.Block)) {
        console.log("Block Found");
        let blockDestination = GetTile(-2,0);
        if (blockDestination.classList.contains(Tiles.Space) && !blockDestination.classList.contains(Entities.Block)) {
            Move(blockDestination, targetTile, Entities.Block)
            Move(targetTile, playerTile, Entities.Character)
        }
    } else {
        PlayerMove(targetTile, playerTile);
    }
       
   
    }
    if(e.key == "s" || e.key == "ArrowDown") {
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
        let targetTile = GetTile(0,+1);
 
        //If there is a block in the way of the player, try to move it, if there is room
       if(targetTile.classList.contains(Entities.Block)) {
        console.log("Block Found");
        let blockDestination = GetTile(0,+2);
        if (blockDestination.classList.contains(Tiles.Space) && !blockDestination.classList.contains(Entities.Block)) {
            Move(blockDestination, targetTile, Entities.Block)
            Move(targetTile, playerTile, Entities.Character)
        }
    } else {
        PlayerMove(targetTile, playerTile);
    }
        // console.log(targetTile);
        // PlayerMove(targetTile, playerTile);
    }
    if(e.key == "d" || e.key == "ArrowRight") {
        let playerTile = document.getElementsByClassName(Entities.Character)[0];
        let targetTile = GetTile(+1,0);

        //If there is a block in the way of the player, try to move it, if there is room
       if(targetTile.classList.contains(Entities.Block)) {
        console.log("Block Found");
        let blockDestination = GetTile(+2,0);
        if (blockDestination.classList.contains(Tiles.Space) && !blockDestination.classList.contains(Entities.Block)) {
            Move(blockDestination, targetTile, Entities.Block)
            Move(targetTile, playerTile, Entities.Character)
        }
    } else {
        PlayerMove(targetTile, playerTile);
    }
 
        console.log(targetTile);
        PlayerMove(targetTile, playerTile);
    }
}

function PlayerMove(targetTile, playerTile) {
    if (!targetTile.classList.contains(Tiles.Wall)) {
        playerTile.classList.remove(Entities.Character);
        targetTile.classList.add(Entities.Character);
    }
}

function Move(DestinationTile, TileToMove, TileClass) {
    if (DestinationTile.classList.contains(Tiles.Space)) {
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
function CheckWin() {
    let goalTiles = document.getElementsByClassName(Tiles.Goal)
    for(i = 0; i < goalTiles.length; i ++) {
        if (goalTiles[i].classList.contains(Entities.Block)) {
            goalTiles[i].classList.add(Entities.BlockDone);
        } else {
            goalTiles[i].classList.remove(Entities.BlockDone)
        }
    }
    let blockDoneTiles = document.getElementsByClassName(Entities.BlockDone)
    if( blockDoneTiles.length == goalTiles.length) {
        // alert("You Just beat the first Level");
        document.removeEventListener("keydown", gameloop);
    }
}
