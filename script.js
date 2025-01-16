const main = document.querySelector('.main');
const buttonDiv = document.querySelector('.buttonDiv')
const button = document.querySelector('.howMany')
button.addEventListener('mouseup', sizeFunc)
const reset = document.querySelector('.reset')


const createGrid = (size) =>{

    for(let j = 0; j< size; j++){
        const row = document.createElement('div')
        row.classList.add('row')

            for(let i = 0; i < size; i++) {

            const cell = document.createElement('div')
            cell.classList.add('cellStyle')

            row.appendChild(cell)
            }

        main.appendChild(row)
        console.log(row)
    }
    function randomColor() {
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        return randomColor;
    }

    const cells = document.querySelectorAll('.cellStyle');
    cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        if (!(cell.style.opacity)) cell.style.opacity = '1';
        opacity = parseFloat(cell.style.opacity)
        cell.style.opacity = opacity -0.1;
        
    })

    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = randomColor();
    }, {once : true});
})


}


reset.addEventListener('click', () => {
    const row = document.querySelectorAll('.row')
    console.log(row);
    row.forEach(row => row.remove())
})


function sizeFunc () {
    let size = prompt("Grid Size?")
    if (size > 0 && size < 101) {
        createGrid(size)
    } else {
        sizeFunc()
    } 
}

function random() {
    let num = Math.floor(Math.random() * 255)
    return num;
}
