const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "998";

document.body.appendChild(canvas);

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const colors = ["#FFD700", "#FF0000", "#00FF00", "#FFFFFF", "#FF69B4"];
const confetti = [];

class Piece {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speed = Math.random() * 3 + 2;
        this.rotation = Math.random() * 360;
        this.spin = Math.random() * 10 - 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.drift = Math.random() * 2 - 1;
    }

    update() {
        this.y += this.speed;
        this.x += this.drift;
        this.rotation += this.spin;

        if (this.y > canvas.height) this.reset();
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

for (let i = 0; i < 200; i++) confetti.push(new Piece());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

animate();
