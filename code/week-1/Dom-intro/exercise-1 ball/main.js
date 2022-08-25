const down = document.getElementById("down");
const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");
let ball = document.getElementById("ball");
function moveDown() {
    let top = parseInt(ball.style.top) || 0;
    top += 15;
    ball.style.top = top + "px";
}
function moveUp() {
    let top = parseInt(ball.style.top) || 0;
    if (top) {
        top -= 15;
        ball.style.top = top + "px";
    }
}
function moveRight() {
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    ball.style.left = left + "px";
}
function moveLeft() {
    let left = parseInt(ball.style.left) || 0;
    if (left) {
        left -= 15;
        ball.style.left = left + "px";
    }
}
