// Select elements directly
const barrel = document.getElementById("Barrel");
const rope = document.getElementById("Rope");
const knife = document.getElementById("Knife");
const light = document.getElementById("Light");
const sign = document.getElementById("Sign");

// Barrel: Rattles on click
barrel.addEventListener("click", () => {
    barrel.animate([
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" }
    ], {
        duration: 500,
        iterations: 1
    });
});

// Rope: Slides to the right on click
rope.addEventListener("click", () => {
    rope.animate([
        { transform: "translateX(0px)" },
        { transform: "translateX(100px)" }
    ], {
        duration: 500,
        fill: "forwards"
    });
});

// Knife: Bobs diagonally down and back on hover
knife.addEventListener("click", () => {
    knife.animate([
        { transform: "translate(0, 0)" },
        { transform: "translate(10px, 20px)" },
    ], {
        duration: 600,
        iterations: 1
    });
});

// Light: Flickers opacity on click
light.addEventListener("click", () => {
    light.animate([
        { opacity: 1 },
        { opacity: 0.4 },
        { opacity: 1 },
        { opacity: 0.7 },
        { opacity: 1 }
    ], {
        duration: 500,
        iterations: 1
    });
});

if (sign) {
    sign.addEventListener("click", () => {
        sign.style.transformOrigin = "center";

        const animation = sign.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(-150deg)" },
            { transform: "rotate(-50deg)" },
            { transform: "rotate(-110deg)" },
            { transform: "rotate(-70deg)" },
            { transform: "rotate(-100deg)" },
            { transform: "rotate(-90deg)" } 
        ], {
            duration: 2000,
            easing: "ease-out",
            iterations: 1
        });

        animation.onfinish = () => {
            sign.style.transform = "rotate(-90deg)";
        };
    });
}
