const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");

let p1Pos = 50;
let p2Pos = window.innerWidth - 400;

// Player speeds
const speed = 20;

document.addEventListener("keydown", function (e) {

    // PLAYER 1 CONTROLS (Arrow keys)
    if (e.key === "ArrowRight") {
        p1Pos += speed;
        p1.style.left = p1Pos + "px";
        p1.style.transform = "scaleX(1)";
        p1.src = "https://fightersgeneration.com/characters3/zero-runrun.gif";
    }

    if (e.key === "ArrowLeft") {
        p1Pos -= speed;
        p1.style.left = p1Pos + "px";
        p1.style.transform = "scaleX(-1)";
        p1.src = "https://fightersgeneration.com/characters3/zero-runrun.gif";
    }

    // PLAYER 2 CONTROLS (A / D)
    if (e.key === "d" || e.key === "D") {
        p2Pos -= speed;
        p2.style.right = p2Pos + "px";
        p2.style.transform = "scaleX(-1)";
        p2.src = "https://fightersgeneration.com/characters3/ryu-walk.gif";
    }

    if (e.key === "a" || e.key === "A") {
        p2Pos += speed;
        p2.style.right = p2Pos + "px";
        p2.style.transform = "scaleX(1)";
        p2.src = "https://fightersgeneration.com/characters3/ryu-walk.gif";
    }
});
