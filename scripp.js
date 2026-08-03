// =========================
// TAMANHO DA FONTE
// =========================

let tamanhoFonte = 18;

function aumentarFonte() {

    if (tamanhoFonte < 34) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }

}

function diminuirFonte() {

    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }

}

// =========================
// ALTO CONTRASTE
// =========================

function altoContraste() {

    document.body.classList.toggle("contraste");

}

// =========================
// LEITOR DE TELA
// =========================

function lerPagina() {

    // Para a leitura anterior, caso exista
    speechSynthesis.cancel();

    // Lê somente o conteúdo principal
    const texto = document.querySelector("main").innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;
    fala.volume = 1;

    speechSynthesis.speak(fala);

}

// =========================
// PARAR LEITURA (tecla ESC)
// =========================

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        speechSynthesis.cancel();

    }

});

// =========================
// MENSAGEM AO CARREGAR
// =========================

window.onload = function(){

    console.log("Projeto Integrador carregado com sucesso!");

};