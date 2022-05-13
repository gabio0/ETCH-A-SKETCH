let gridSize = 16
const container = document.querySelector('.container');
const button = document.querySelector('button');


function newGrid(gridSize){
    if(gridSize > 100)  {
        gridSize = 100;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style='grid-template-columns: repeat(' + gridSize + ', 1fr); grid-template-rows: repeat(' + gridSize + ', 1fr);'
    for(let i=0;i<gridSize*gridSize;i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style = 'width: ' + (800/gridSize) + "px";
        container.appendChild(block);
    }
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(e => {
    e.addEventListener('mouseover', event => {
        e.style = 'background-color: black;'
    })
})
}



button.addEventListener('click', function(){
    gridSize = prompt("Grid Size?");
    newGrid(gridSize);
});

newGrid(gridSize);