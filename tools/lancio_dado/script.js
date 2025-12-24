const rollBtn = document.getElementById("rollBtn");
const dice = document.getElementById("dice");
const result = document.getElementById("result");

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  dice.classList.add("rolling");

  setTimeout(() => {
    const roll = Math.floor(Math.random() * 6);
    dice.textContent = faces[roll];
    result.textContent = `Hai ottenuto: ${roll + 1}`;
    dice.classList.remove("rolling");
  }, 900); // durata animazione realistica
}

rollBtn.addEventListener("click", rollDice);
