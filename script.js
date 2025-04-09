
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const container = document.querySelector(".container");
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1";
        
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div")
            cell.style.border = "0.01em solid black";
            cell.style.flex = "1"
            row.appendChild(cell)

            
            cell.style.flex = "1"
            cell.addEventListener("mouseover", function() {
                if (cell.style.backgroundColor == "") {
                    cell.style.opacity = 0.1
                    cell.style.backgroundColor = "#" + Math.random().toString(16).substring(2,8)
                } else {
                    opacity = parseFloat(cell.style.opacity)
                    if (opacity < 1) {
                        cell.style.opacity = opacity + 0.1
                    }
                }
            })
            
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