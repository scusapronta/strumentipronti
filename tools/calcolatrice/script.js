const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
        if (value) {
            display.value += value;
        }
    });
});

clearBtn.addEventListener("click", () => {
    display.value = "";
});

equalBtn.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Errore";
    }
});

