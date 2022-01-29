const cells = document.querySelectorAll("button.cell")
 console.log(cells)

cells.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

function handleClick(event){
    console.log("clicked")
}