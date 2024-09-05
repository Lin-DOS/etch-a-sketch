const container = document.querySelector("div");
const body = document.querySelector("body");
const divContainer = document.querySelector("body");

body.setAttribute("style", "min-height: 100vh; display: flex; flex-direction: column; align-items: center;")
container.setAttribute("style", "width: 600px; display: flex; justify-content: center;");

const btn = document.createElement("button");
btn.textContent = "New grid";
btn.setAttribute("style", "margin: 16px;")
body.insertBefore(btn, container);
const button = document.querySelector("button");
createGrid(16);

function createGrid(size) {

  for (let i=0; i<size; i++) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("style", "display: flex; flex-direction: column; height: 600px;");
    container.appendChild(divContainer);

    const div = document.createElement("div");
    div.className = "divs"
    div.setAttribute("style", "border: 0px solid black; aspect-ratio: 1/1; flex: 1 1 auto;");
    div.style.width = "calc((600px / " + size + ") - 2px)";

    for (let i=0; i<size; i++) {
      const div = document.createElement("div");
      div.className = "divs"
      div.setAttribute("style", "border: 1px solid black;  aspect-ratio: 1/1; flex: 1 1 auto;");
      div.style.width = "calc((600px / " + size + ") - 2px)";
      divContainer.appendChild(div);
    }
  }

  const divo = document.querySelectorAll("div.divs");
  divo.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
    if (div.style.opacity === "") {
      div.style.opacity = "0.1";
    }
    div.style.opacity = "calc(" + div.style.opacity + " + 0.1)";
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