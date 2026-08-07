// ==========================
// TAMANHO DA FONTE
// ==========================

let tamanhoFonte = 18;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

// ==========================
// ALTO CONTRASTE
// ==========================

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

// ==========================
// LEITOR DE VOZ
// ==========================

let fala = null;

function lerPagina() {

    // Para qualquer leitura anterior
    speechSynthesis.cancel();

    // Lê apenas o conteúdo principal
    const conteudo = document.getElementById("conteudo");

    if (!conteudo) {
        alert("Conteúdo não encontrado.");
        return;
    }

    fala = new SpeechSynthesisUtterance(conteudo.innerText);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;
    fala.volume = 1;

    // Seleciona uma voz em português, se disponível
    const vozes = speechSynthesis.getVoices();
    const vozPT = vozes.find(voz => voz.lang.includes("pt"));

    if (vozPT) {
        fala.voice = vozPT;
    }

    speechSynthesis.speak(fala);
}

function pararLeitura() {
    speechSynthesis.cancel();
}

// Carrega as vozes disponíveis
window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};