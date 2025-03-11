// Load the SVG file dynamically
fetch("basement_scene.svg")
    .then(response => response.text())
    .then(svgText => {
        document.getElementById("svg-container").innerHTML = svgText;

        // Select elements after SVG loads
        const barrel = document.getElementById("Barrel");
        const rope = document.getElementById("Rope");
        const knife = document.getElementById("Knife");
        const light = document.getElementById("Light");

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
                { transform: "translateX(50px)" }
            ], {
                duration: 500,
                fill: "forwards"
            });
        });

        // Knife: Bobs diagonally down and back on hover
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

        // Light: Flickers opacity on click
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

    })
    .catch(error => console.error("Error loading SVG:", error));
