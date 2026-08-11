```javascript
/* =========================================
   PORTAL INCLUSIVO - SCRIPT.JS
========================================= */


/* =========================================
   CONTROLE DO TAMANHO DA FONTE
========================================= */

let tamanhoFonte = 100;

function aumentarFonte() {

    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }

}


function diminuirFonte() {

    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }

}


/* =========================================
   ALTO CONTRASTE
========================================= */

function altoContraste() {

    document.body.classList.toggle("alto-contraste");

}


/* =========================================
   LEITURA DA PÁGINA
========================================= */

function lerPagina() {

    // Verifica se o navegador suporta leitura
    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não suporta a função de leitura de texto."
        );

        return;
    }

    // Para qualquer leitura anterior
    window.speechSynthesis.cancel();

    // Pega somente o conteúdo principal
    const conteudo = document.querySelector("main");

    if (!conteudo) {
        return;
    }

    // Obtém o texto da página
    const texto = conteudo.innerText;

    // Cria a fala
    const fala = new SpeechSynthesisUtterance(texto);

    // Configura idioma
    fala.lang = "pt-BR";

    // Velocidade da leitura
    fala.rate = 0.9;

    // Tom da voz
    fala.pitch = 1;

    // Volume
    fala.volume = 1;

    // Inicia leitura
    window.speechSynthesis.speak(fala);
}


/* =========================================
   PARAR LEITURA
========================================= */

function pararLeitura() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

}


/* =========================================
   FLASHCARDS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const flashcards = document.querySelectorAll(
        "#atividades .card"
    );

    flashcards.forEach(function (card) {

        card.style.cursor = "pointer";

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "role",
            "button"
        );

        card.addEventListener("click", function () {

            mostrarResposta(card);

        });


        // Permite usar os flashcards pelo teclado
        card.addEventListener("keydown", function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                mostrarResposta(card);

            }

        });

    });

});


/* =========================================
   RESPOSTAS DOS FLASHCARDS
========================================= */

function mostrarResposta(card) {

    const pergunta = card.querySelector("p");

    if (!pergunta) {
        return;
    }

    // Verifica se já existe uma resposta
    let resposta = card.querySelector(".resposta-flashcard");

    if (resposta) {

        resposta.remove();

        card.classList.remove("flashcard-aberto");

        return;
    }


    // Identifica qual flashcard foi selecionado
    const titulo = card.querySelector("h3");

    if (!titulo) {
        return;
    }


    let textoResposta = "";


    if (titulo.innerText.includes("1")) {

        textoResposta =
            "Um sensor é um dispositivo capaz de detectar informações do ambiente, como luz, temperatura, distância ou obstáculos.";

    }

    else if (titulo.innerText.includes("2")) {

        textoResposta =
            "Energia elétrica é a energia associada ao movimento das cargas elétricas. Ela é utilizada para alimentar diversos equipamentos.";

    }

    else if (titulo.innerText.includes("3")) {

        textoResposta =
            "O Arduino é uma plataforma eletrônica utilizada para criar e programar projetos, principalmente em automação e robótica.";

    }

    else if (titulo.innerText.includes("4")) {

        textoResposta =
            "Um motor elétrico transforma energia elétrica em energia mecânica, produzindo movimento.";

    }


    // Cria o elemento da resposta
    resposta = document.createElement("div");

    resposta.className =
        "resposta-flashcard mt-3 p-3 rounded";

    resposta.innerHTML =
        "<strong>Resposta:</strong> " + textoResposta;


    // Adiciona a resposta
    card.querySelector(".card-body").appendChild(
        resposta
    );

    card.classList.add("flashcard-aberto");

}


/* =========================================
   VOLTAR AO TOPO
========================================= */

function voltarAoTopo() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   ATALHOS DE TECLADO
========================================= */

document.addEventListener("keydown", function (event) {

    // Alt + A = aumentar fonte
    if (event.altKey && event.key.toLowerCase() === "a") {

        event.preventDefault();

        aumentarFonte();

    }


    // Alt + D = diminuir fonte
    if (event.altKey && event.key.toLowerCase() === "d") {

        event.preventDefault();

        diminuirFonte();

    }


    // Alt + C = alto contraste
    if (event.altKey && event.key.toLowerCase() === "c") {

        event.preventDefault();

        altoContraste();

    }


    // Escape = parar leitura
    if (event.key === "Escape") {

        pararLeitura();

    }

}