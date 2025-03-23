// Створюємо калькулятор динамічно в стилі iPhone
const body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.backgroundColor = "#000";

const container = document.createElement("div");
container.style.width = "320px";
container.style.padding = "20px";
container.style.borderRadius = "30px";
container.style.backgroundColor = "#1C1C1C";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

const display = document.createElement("input");
display.type = "text";
display.style.width = "100%";
display.style.height = "80px";
display.style.marginBottom = "20px";
display.style.fontSize = "36px";
display.style.textAlign = "right";
display.style.border = "none";
display.style.background = "#333";
display.style.color = "#fff";
display.style.borderRadius = "15px";
display.style.padding = "10px";
container.appendChild(display);

const buttons = [
    "C", "±", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
];

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "grid";
buttonContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonContainer.style.gap = "10px";

buttons.forEach(char => {
    const button = document.createElement("button");
    button.textContent = char;
    button.style.padding = "20px";
    button.style.fontSize = "24px";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.width = "70px";
    button.style.height = "70px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.color = "#fff";
    button.style.backgroundColor = ["+", "-", "*", "/", "="] .includes(char) ? "#FF9500" :
                                char === "C" ? "#D4D4D2" : "#505050";
    button.style.color = char === "C" ? "#000" : "#fff";
    
    button.addEventListener("click", () => {
        if (char === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (char === "C") {
            display.value = "";
        } else if (char === "±") {
            display.value = display.value ? String(-parseFloat(display.value)) : "";
        } else if (char === "%") {
            display.value = display.value ? String(parseFloat(display.value) / 100) : "";
        } else {
            display.value += char;
        }
    });

    buttonContainer.appendChild(button);
});

container.appendChild(buttonContainer);
body.appendChild(container);
