const rollBtn = document.getElementById("rollBtn");
const dice = document.getElementById("dice");
const face = document.getElementById("face");
const result = document.getElementById("result");

// 6 SVG inline come stringhe
const faces = [
  `<rect x="5" y="5" width="90" height="90" rx="12" fill="#fafafa" stroke="#444" stroke-width="3"/>
   <circle cx="50" cy="50" r="8" fill="#000"/>`,

  `<rect x="5" y="5" width="90" height="90" rx="12" fill="#fafafa" stroke="#444" stroke-width="3"/>
   <circle cx="30" cy="30" r="8" fill="#000"/>
   <circle cx="70" cy="70" r="8" fill="#000"/>`,

  `<rect x="5" y="5" width="90" height="90" rx="12" fill="#fafafa" stroke="#444" stroke-width="3"/>
   <circle cx="30" cy="30" r="8" fill="#000"/>
   <circle cx="50" cy="50" r="8" fill="#000"/>
   <circle cx="70" cy="70" r="8" fill="#000"/>`,

  `<rect x="5" y="5" width="90" height="90" rx="12" fill="#fafafa" stroke="#444" stroke-width="3"/>
   <circle cx="30" cy="30" r="8" fill="#000"/>
   <circle cx="70" cy="30" r="8" fill="#000"/>
   <circle cx="30" cy="70" r="8" fill="#000"/>
   <circle cx="70" cy="70" r="8" fill="#000"/>`,

  `<rect x="5" y="5" width="90" height="90" rx="12" fill="#fafafa" stroke="#444" stroke-width="3"/>
   <circle cx="30" cy="30" r="8" fill="#000"/>
   <circle cx="70" cy="30" r="8" fill="#000"/>
   <circle cx="50" cy="50" r="8" fill="#000"/>
   <circle cx="30" cy="70" r="8" fill="#000"/>
   <circle cx="70" cy="70" r="8" fill="#000"/>`,

  `<rect x="5" y="5" width="90" height="90" rx="12" fill="#fafafa" stroke="#444" stroke-width="3"/>
   <circle cx="30" cy="30" r="8" fill="#000"/>
   <circle cx="70" cy="30" r="8" fill="#000"/>
   <circle cx="30" cy="50" r="8" fill="#000"/>
   <circle cx="70" cy="50" r="8" fill="#000"/>
   <circle cx="30" cy="70" r="8" fill="#000"/>
   <circle cx="70" cy="70" r="8" fill="#000"/>`
];

function rollDice() {
  dice.classList.add("rolling");

  // cambio facce durante il roll
  let i = 0;
  const interval = setInterval(() => {
    face.innerHTML = faces[Math.floor(Math.random() * 6)];
    i++;
    if (i > 6) clearInterval(interval);
  }, 100);

  // risultato finale
  setTimeout(() => {
    const final = Math.floor(Math.random() * 6);
    face.innerHTML = faces[final];
    result.textContent = `Hai ottenuto: ${final + 1}`;
    dice.classList.remove("rolling");
  }, 900);
}

rollBtn.addEventListener("click", rollDice);
