let MainDivLength = 800;
let rows = 16;
let columns = 16;

const MainArea = document.getElementById("ContainerDiv");
MainArea.style.height = `${MainDivLength}px`;
MainArea.style.width = `${MainDivLength}px`;

for (let i = 0; i< rows*columns; i++){
    const cell = document.createElement("div")
    
    cell.style.width = `${(MainDivLength / columns) - 2}px`;
    cell.style.height = `${(MainDivLength / rows) -2}px`;
    cell.classList.add("cell");

    MainArea.appendChild(cell);

    cell.addEventListener("click", () =>{
       cell.style.backgroundColor = "black";
    })

}
