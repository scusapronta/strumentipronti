// ===============================
// Imposta automaticamente l'anno nel footer
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ===============================
// Spazio per funzioni future
// (verrà usato nelle singole pagine degli strumenti)
// ===============================

// Esempio di funzione base (vuota)
function initTool() {
    // Ogni strumento potrà richiamare questa funzione
    // per inizializzare i propri script
}

