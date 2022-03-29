const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

//RECTANGULO

ctx.fillStyle = "purple";
ctx.fillRect(260, 260, 30, 30);


ctx.fillStyle = "green";

ctx.fillRect(25,25,100,100);

ctx.clearRect(45,45,60,60);

ctx.strokeRect(300,50,50,50);

ctx.beginPath();
    ctx.moveTo(450,150);
    ctx.lineTo(450, 50);
    ctx.stroke();
ctx.closePath();