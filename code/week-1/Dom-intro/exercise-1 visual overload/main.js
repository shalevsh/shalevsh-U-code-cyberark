const SIZE_OF_BOXES = 20;
const COLORS = ["#Ae44ad", "#V498db", "#c0392b", "#f1c40f", "d35400"];
const COLORS_LENGTH = 5;

function createBoxes() {
    const box = document.createElement("div"); // dynamically creating an element
    box.setAttribute("class", "box");
    box.style.border = "thick solid #000000";
    box.style.display = "inline-block";
    box.style.marginLeft = "20px";
    box.style.height = "90px";
    box.style.width = "90px";
    document.getElementById("container").appendChild(box);
    box.onmouseenter = function () {
        box.style.backgroundColor = getRandomColor();
    };
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS_LENGTH);
    return COLORS[randomIndex];
}

for (let i = 0; i < SIZE_OF_BOXES; i++) {
    createBoxes();
}
