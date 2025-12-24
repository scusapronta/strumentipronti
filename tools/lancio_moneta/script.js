const flipBtn = document.getElementById("flipBtn");
const coin = document.getElementById("coin");
const coinFace = document.getElementById("coin-face");
const result = document.getElementById("result");

// SVG fronte (Testa)
const testaSVG = `
  <circle cx="60" cy="60" r="50" fill="#f5f5f5" stroke="#888" stroke-width="4"/>
  <circle cx="60" cy="60" r="40" fill="#e8e8e8" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="26" fill="#444" font-family="Arial">T</text>
`;

// SVG retro (Croce)
const croceSVG = `
  <circle cx="60" cy="60" r="50" fill="#f5f5f5" stroke="#888" stroke-width="4"/>
  <circle cx="60" cy="60" r="40" fill="#e8e8e8" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="26" fill="#444" font-family="Arial">C</text>
`;

function flipCoin() {
  coin.classList.add("flipping");

  // cambio casuale durante il flip (solo per effetto)
  let i = 0;
  const interval = setInterval(() => {
    const temp = Math.random() < 0.5 ? testaSVG : croceSVG;
    coinFace.innerHTML = temp;
    i++;
    if (i > 5) clearInterval(interval);
  }, 90);

  // risultato finale
  setTimeout(() => {
    const isTesta = Math.random() < 0.5;
    coinFace.innerHTML = isTesta ? testaSVG : croceSVG;
    result.textContent = isTesta ? "È uscito: Testa" : "È uscito: Croce";
    coin.classList.remove("flipping");
  }, 900);
}

flipBtn.addEventListener("click", flipCoin);

