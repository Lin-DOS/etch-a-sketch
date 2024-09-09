const container: HTMLDivElement | null = document.querySelector("div");
const body: HTMLBodyElement = document.querySelector("body")!;
const divContainer = document.querySelector("body");

body.setAttribute("style", "min-height: 100vh; display: flex; flex-direction: column; align-items: center;")
container.setAttribute("style", "width: 600px; display: flex; justify-content: center;");

const btn: HTMLElement = document.createElement("button");
btn.textContent = "New grid";
btn.setAttribute("style", "margin: 16px;")
body.insertBefore(btn, container);
const button = document.querySelector("button");
createGrid(16);

function createGrid(size) {

  for (let i: number = 0; i < size; i++) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("style", "display: flex; flex-direction: column; height: 600px;");
    container.appendChild(divContainer);

    for (let j: number = 0; j < size; j++) {
      const div = document.createElement("div");
      div.className = "divs";
      div.setAttribute("style", "border: 1px solid black;  aspect-ratio: 1/1; flex: 1 1 auto;");
      div.style.width = "calc((600px / " + size + ") - 2px)";
      divContainer.appendChild(div);
    }
  }

  document.querySelectorAll("div.divs").forEach((div: HTMLElement) => {
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
  let userInput: string = prompt("Enter number of squares in grid: ");
  let num: number = parseInt(userInput);
  if (num < 1 || num > 50) {
    alert("Can't create grids larger than 50x50! Enter a number between 1 and 50.");
  }
  else {
    container.textContent = "";
    createGrid(num);
  }
});