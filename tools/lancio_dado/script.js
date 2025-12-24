
const rollBtn = document.getElementById("rollBtn");
const dice = document.getElementById("dice");
const result = document.getElementById("result");

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  dice.style.transform = "rotate(360deg)";
  setTimeout(() => {
    const roll = Math.floor(Math.random() * 6);
    dice.textContent = faces[roll];
    result.textContent = `Hai ottenuto: ${roll + 1}`;
    dice.style.transform = "rotate(0deg)";
  }, 300);
}

rollBtn.addEventListener("click", rollDice);
