var container = document.querySelector("div");
var body = document.querySelector("body");
var divContainer = document.querySelector("body");
body.setAttribute("style", "min-height: 100vh; display: flex; flex-direction: column; align-items: center;");
container.setAttribute("style", "width: 600px; display: flex; justify-content: center;");
var btn = document.createElement("button");
btn.textContent = "New grid";
btn.setAttribute("style", "margin: 16px;");
body.insertBefore(btn, container);
var button = document.querySelector("button");
createGrid(16);

function createGrid(size) {
    for (var i = 0; i < size; i++) {
        var divContainer_1 = document.createElement("div");
        divContainer_1.setAttribute("style", "display: flex; flex-direction: column; height: 600px;");
        container.appendChild(divContainer_1);
        for (var j = 0; j < size; j++) {
            var div = document.createElement("div");
            div.className = "divs";
            div.setAttribute("style", "border: 1px solid black;  aspect-ratio: 1/1; flex: 1 1 auto;");
            div.style.width = "calc((600px / " + size + ") - 2px)";
            divContainer_1.appendChild(div);
        }
    }
    document.querySelectorAll("div.divs").forEach(function (div) {
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "black";
            if (div.style.opacity === "") {
                div.style.opacity = "0.1";
            }
            div.style.opacity = "calc(" + div.style.opacity + " + 0.1)";
        });
    });
}

button.addEventListener("click", function () {
    var userInput = prompt("Enter number of squares in grid: ");
    var num = parseInt(userInput);
    if (num < 1 || num > 50) {
        alert("Can't create grids larger than 50x50! Enter a number between 1 and 50.");
    }
    else {
        container.textContent = "";
        createGrid(num);
    }
});
