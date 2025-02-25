
for (let i = 0; i < 16; i++) {
    const container = document.querySelector(".container");
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = "1";
    id = row
    
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div")
        
        cell.style.border = "1px solid black";
        cell.style.flex = "1"
        cell.class = i
        cell.addEventListener("mouseover", () => cell.style.backgroundColor = "black")
        row.appendChild(cell)
    }
}
