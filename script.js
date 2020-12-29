var numColumns = 16;
var color = 'black';
const container = document.querySelector('#container');
createGrid();
var pixels;

function createGrid() {
    container.style.gridTemplateColumns = "repeat(" + numColumns + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + numColumns + ", 1fr)";
    for(i=0; i<numColumns * numColumns;i++) {
        var tempDiv = document.createElement('div');
        tempDiv.style.backgroundColor = 'white';
        container.appendChild(tempDiv);
    }

    pixels = container.querySelectorAll('div');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', pixelColor));
}
// Buttons
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

const colorSelector = document.querySelector('#color');
colorSelector.addEventListener('input', updateColor);

const sizeSelector = document.querySelector('#sizeRange');
sizeSelector.addEventListener('change', updateSize);

function pixelColor() {
    if(color == 'rainbow') {
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    } else {
        this.style.backgroundColor = color;
    }
}

function clearGrid() {
    pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
}

function updateColor(event) {
    color = event.target.value;
}

function updateSize(event) {
    numColumns = event.target.value;
    console.log(numColumns);
    clearGrid();
    createGrid();

}
