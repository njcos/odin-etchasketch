const main = document.querySelector('.main');

const createGrid = () =>{

    for(let j = 0; j< 16; j++){
        const row = document.createElement('div')
        row.classList.add('row')

            for(let i = 0; i < 16; i++) {

            const cell = document.createElement('div')
            cell.classList.add('cellStyle')
            row.appendChild(cell)
            }

        main.appendChild(row)
        console.log(row)
    }

}
createGrid()

const cells = document.querySelectorAll('.cellStyle');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hover')
    })
})
