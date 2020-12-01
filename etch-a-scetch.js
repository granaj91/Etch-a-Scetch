const HEIGHT = 480;
let cellNum = 16;

buildGrid();

document.documentElement.style.setProperty("--colNum", cellNum);
document.documentElement.style.setProperty("--gridHeight", (HEIGHT/cellNum).toString() + "px");

function buildGrid(){
    let mainDiv = document.getElementById("grid");
    for(var i = 0; i < cellNum * cellNum; i++){
        let cell = document.createElement("div");
        cell.className = "grid-item";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        
        
        mainDiv.appendChild(cell);
    }
}

function clearGrid(){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "silver";
    });
}


