const canvas = document.querySelector("#drawing");
const ctx = canvas.getContext("2d");

function circle(x, y, radius) {
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

}

function strokeCircle(x, y, radius) {
    ctx.arc(x, y, radius, 0, Math.PI, true);
    ctx.stroke();
}


function fillCircle(x, y, radius) {
    ctx.arc(x, y, radius, 0, Math.PI, true);
    ctx.fill();
}


// a Square
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.lineTo(200, 200);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);
// ctx.strokeStyle = "red";
// ctx.stroke();
// ctx.fillStyle = "yellow";
// ctx.fill()


// ctx.beginPath();
// ctx.rect(100,100,100,100);
// ctx.strokeStyle = "red";
// ctx.stroke();

ctx.beginPath();
ctx.rect(100, 100, 100, 100);
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.shadowColor = "red";
ctx.shadowBlur = 15;
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill()


// Triangle
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(100, 400);
ctx.lineTo(200, 400);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.lineCap = "round";
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.fillStyle = "purple";
ctx.fill();

strokeCircle

// Draw a circle
ctx.beginPath();
// arc(centerX, centerY, radius, startingAngle, endingAngle)
// ctx.arc(250, 250, 40, 0, 2 * Math.PI);
circle(250, 250, 40);
ctx.stroke();

ctx.beginPath();
circle(300, 100, 50);
ctx.stroke();

ctx.beginPath();
strokeCircle(300, 300, 20);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
fillCircle(100, 300, 20);
ctx.fillStyle = "brown";
ctx.fill();

// Draw half a circle
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 4, false);
ctx.strokeStyle = "green";
ctx.closePath();
ctx.stroke();
ctx.fill();
