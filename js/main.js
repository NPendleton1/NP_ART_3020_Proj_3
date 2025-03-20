
const barrel = document.getElementById("Barrel");
const rope = document.getElementById("Rope");
const knife = document.getElementById("Knife");
const light = document.getElementById("Light");
const sign = document.getElementById("Sign");
const lightframe = document.getElementById("LightFrame");
const key = document.getElementById("Key");
const chestlidopen = document.getElementById("ChestLidOpen");
const chestlidclosed = document.getElementById("ChestLidClosed");
const darkscene = document.querySelector(".darkscene");
const popupOverlay = document.getElementById("popup-overlay");

key.style.opacity = "0";
chestlidopen.style.opacity = "0"

knife.addEventListener("click", () => {
    const knifeAnimation = knife.animate([
        { transform: "translate3d(170px, -750px, 0px)" },
    ], {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in",
        easing: "ease-out"
    });

    knifeAnimation.onfinish = () => {

        const lightframeAnimation = lightframe.animate([
            { transform: "translateY(0px)",},
            { transform: "translateY(600px)",}
        ], {
            duration: 100,
            fill: "forwards",
            easing: "ease-in"
        });

        light.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 10,
            fill: "forwards"
        });
        knife.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 10,
            fill: "forwards"
        });
        key.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 100,
            fill: "forwards"
        });
    };
});



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


rope.addEventListener("click", () => {
    rope.animate([
        { transform: "translateX(0px)" },
        { transform: "translateX(100px)" }
    ], {
        duration: 500,
        fill: "forwards"
    });
});


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

    darkscene.animate([
        { opacity: 0 },
        { opacity: 0.9 },
        { opacity: 0 }, 
        { opacity: 0.9 },
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

            sign.style.pointerEvents = "none";
            sign.style.cursor = "default";
        };
    });
}


key.addEventListener("click", () => {
    const keyAnimation = key.animate([
        { transform: "translate3d(373px, -170px, 0px)" },
    ], {
        duration: 300,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out"
    });

    keyAnimation.onfinish = () => {
        setTimeout(() => {
            chestlidclosed.style.opacity = "0";
            chestlidopen.style.opacity = "1";
            key.style.opacity = "0";

            setTimeout(() => {
                popupOverlay.classList.add("show-popup");
            }, 500);

            key.style.pointerEvents = "none";
            key.style.cursor = "default";

        }, 500);
    };
});
popupOverlay.addEventListener("click", () => {
    popupOverlay.classList.remove("show-popup");
});

let ropePulse = setInterval(pulseRope, 3000);

function pulseRope() {
    rope.animate([
        { opacity: 1 },
        { opacity: 0.6 },
        { opacity: 1 }
    ], {
        duration: 1000,
        iterations: 2
    });
}

rope.addEventListener("click", () => {
    clearInterval(ropePulse);
    rope.style.opacity = "1";
    rope.style.pointerEvents = "none";
});