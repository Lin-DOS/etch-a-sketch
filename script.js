// const div = document.createElement("div");
const container = document.querySelector("div");
// const p = document.createElement("p");
// p.style.color = "red";
// p.textContent = "I'm red!";
// container.appendChild(p);


for (i=0; i<=16; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "border: 1px solid black; width: ; height: 64px;");
    // div.textContent = "div";

    container.setAttribute("style", "display: flex; flex-wrap: wrap;");
    container.appendChild(div);
}