const snowContainer = document.createElement("div");
snowContainer.style.position = "fixed";
snowContainer.style.top = 0;
snowContainer.style.left = 0;
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
snowContainer.style.overflow = "hidden";
document.body.appendChild(snowContainer);

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = "❄";
    snowflake.style.position = "absolute";
    snowflake.style.color = "white";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.top = "-20px";
    snowflake.style.opacity = Math.random();
    snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 150);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh);
    }
}`;
document.head.appendChild(style);
