
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const container = document.querySelector(".container");
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1";
        id = row
        
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div")
            
            cell.style.border = "0.01em solid black";
            cell.style.flex = "1"
            cell.class = i
            cell.addEventListener("mouseover", () => cell.style.backgroundColor = "black")
            row.appendChild(cell)
        }
    }
}

createGrid(16)

const bttn = document.querySelector("button")
bttn.addEventListener("click", function() {
    let input;
    while (isNaN(input) || input > 100) {
        input = prompt("Please enter the grid dimensions size you want(Max 100)")
    }
    const container = document.querySelector(".container");
    container.replaceChildren()
    createGrid(input)
    console.log(input)
})