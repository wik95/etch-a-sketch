// query selectors
const container = document.querySelector('.container'); 
const sizeOfGrid = document.querySelector('.size');
const black = document.querySelector('.black');
const random = document.querySelector('.random');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');

// the default number of cells the user sees when the page first loads
let numbOfCells = 16;

// the function that creates a grid with the given amount of cells
let makeGrid = (numbOfCells) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')

    for (let i = 0; i <numbOfCells; i++){
        const myRow = document.createElement('div');
        myRow.classList.add('row');


        for (let j = 0; j < numbOfCells; j++){
            const myCell = document.createElement('div');
            //myCell.setAttribute('id', 'innercell');
            myCell.classList.add('cell');
            myCell.style.width = `${960 / numbOfCells}px`;
            myCell.style.height = `${500 / numbOfCells}px`;
            myRow.appendChild(myCell);
// when clicking the "black" button the user can draw in black
            black.addEventListener('click', () => {
                myCell.addEventListener('mouseover', () => {
                    myCell.style.backgroundColor = 'black'
                });
            });
// when clicking the "random" button the user can draw in random colors
            random.addEventListener('click', () => {
                myCell.addEventListener('mouseover', () => {
                    myCell.style.backgroundColor = generateRandomColor();
                });
            });
// when clicking the "eraser" button the user can erase their drawings
            eraser.addEventListener('click', () => {
                myCell.addEventListener('mouseover', () => {
                    myCell.style.backgroundColor = 'white';
                });
            });
// when clicking the "reset" button the user can clear the whole canvas
            clear.addEventListener('click', () => {
                myCell.style.backgroundColor = 'white';
                });

        }
        wrapper.appendChild(myRow);
    }
    container.appendChild(wrapper);
}

//makeGrid function called 
makeGrid(numbOfCells);

// after the user clicks on the "setSize" button and enters a value the size of the grid changes
sizeOfGrid.addEventListener('click', () => {
    let userSize = Number(window.prompt('Please enter grid size of choice:', ''));
    
    if(userSize > 100 || userSize < 1){
        alert('Please enter a number between 1 and 100!');
    } else {
        const wrapper = document.querySelector('.wrapper');
        if(!wrapper) {
            makeGrid(userSize);
        } else {
            wrapper.remove()
            makeGrid(userSize)
        }
        
    }
});
    
//a function that generates random colors

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

