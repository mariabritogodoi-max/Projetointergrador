// ===============================
// TAMANHO DA FONTE
// ===============================

let tamanhoFonte = 100;

// Aumentar fonte
function aumentarFonte() {
    if (tamanhoFonte < 200) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

// Diminuir fonte
function diminuirFonte() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

// ===============================
// ALTO CONTRASTE
// ===============================

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

// ===============================
// LEITOR DE VOZ
// ===============================

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

    // Procura uma voz em português
    const vozes = speechSynthesis.getVoices();

    const vozPT = vozes.find(function(voz) {
        return voz.lang.startsWith("pt");
    });

    if (vozPT) {
        fala.voice = vozPT;
    }

    speechSynthesis.speak(fala);
}

// Atualiza a lista de vozes quando o navegador carregar
window.speechSynthesis.onvoiceschanged = function () {
    speechSynthesis.getVoices();
};

// ===============================
// PARAR LEITURA
// ===============================

function pararLeitura() {
    speechSynthesis.cancel();
}