for (let i = 0; i < 16; i++) {
    const container = document.querySelector(".container");
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = "1";
    
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div")
        row.appendChild(div)
        div.style.border = "1px solid black";
        div.style.flex = "1"
    }
}