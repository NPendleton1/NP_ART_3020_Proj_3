// Load the SVG dynamically
fetch("basement_scene.svg")
    .then(response => response.text())
    .then(svgText => {
        document.getElementById("svg-container").innerHTML = svgText;

        // Ensure we can access elements after loading the SVG
        const barrel = document.getElementById("Barrel");
        const rope = document.getElementById("Rope");
        const knife = document.getElementById("Knife");
        const light = document.getElementById("Light");

        if (barrel) {
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
        }

        if (rope) {
            rope.addEventListener("click", () => {
                rope.animate([
                    { transform: "translateX(0px)" },
                    { transform: "translateX(50px)" }
                ], {
                    duration: 500,
                    fill: "forwards"
                });
            });
        }

        if (knife) {
            knife.addEventListener("mouseenter", () => {
                knife.animate([
                    { transform: "translate(0, 0)" },
                    { transform: "translate(10px, 20px)" },
                    { transform: "translate(0, 0)" }
                ], {
                    duration: 600,
                    iterations: 1
                });
            });
        }

        if (light) {
            light.addEventListener("click", () => {
                light.animate([
                    { opacity: 1 },
                    { opacity: 0.2 },
                    { opacity: 1 },
                    { opacity: 0.5 },
                    { opacity: 1 }
                ], {
                    duration: 1000,
                    iterations: 1
                });
            });
        }
    })
    .catch(error => console.error("Error loading SVG:", error));
