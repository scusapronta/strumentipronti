const rollBtn = document.getElementById("rollBtn");
const dice = document.getElementById("dice");
const result = document.getElementById("result");

function rollDice() {
  dice.classList.add("rolling");

  // Simula cambio facce durante il lancio
  let count = 0;
  const interval = setInterval(() => {
    const temp = Math.floor(Math.random() * 6) + 1;
    dice.textContent = temp;
    count++;
    if (count >= 6) clearInterval(interval);
  }, 100);

  // Risultato finale
  setTimeout(() => {
    const final = Math.floor(Math.random() * 6) + 1;
    dice.textContent = final;
    result.textContent = `Hai ottenuto: ${final}`;
    dice.classList.remove("rolling");
  }, 900);
}

rollBtn.addEventListener("click", rollDice);
