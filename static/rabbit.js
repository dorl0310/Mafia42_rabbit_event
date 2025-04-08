const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#333";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
ctx.font = "30px sans-serif";
ctx.fillText("토끼 게임!", 400, 270);