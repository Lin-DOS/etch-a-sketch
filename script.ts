const container = document.querySelector("div");
const body = document.querySelector("body");
const divContainer = document.querySelector("body");

body.setAttribute("style", "min-height: 100vh; display: flex; flex-direction: column; align-items: center;")
container.setAttribute("style", "width: 960px; display: flex; justify-content: center;");

const btn = document.createElement("button");
btn.textContent = "New grid";
body.insertBefore(btn, container);
const button = document.querySelector("button");
createGrid(16);

function createGrid(size) {

  for (let i=0; i<size; i++) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("style", "display: flex; flex-direction: column; height: 960px;");
    container.appendChild(divContainer);

    const div = document.createElement("div");
    div.className = "divs"
    div.setAttribute("style", "border: 1px solid black; aspect-ratio: 1/1; flex: 1 1 auto; ");
    div.style.width = "calc((960px / " + size + ") - 2px)";

    for (let i=0; i<size; i++) {
      const div = document.createElement("div");
      div.className = "divs"
      div.setAttribute("style", "border: 1px solid black;  aspect-ratio: 1/1; flex: 1 1 auto;");
      div.style.width = "calc((960px / " + size + ") - 2px)";
      divContainer.appendChild(div);
    }
  }

  const divo = document.querySelectorAll("div.divs");
  divo.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
    });
  });
}

button.addEventListener("click", () => {
  let num = prompt("Enter number of squares in grid: ");
  if (num > 100) {
    alert("Can't create grids larger than 100x100! Enter a number below 100.");
  }
  else {
    container.textContent = "";
    createGrid(num);
  }
  
});

const divo = document.querySelectorAll("div.divs");

divo.forEach((div) => {
  div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "black";
  });
});
