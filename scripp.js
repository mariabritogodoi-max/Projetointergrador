```javascript
// ==========================================
// PORTAL INCLUSIVO - SCRIPT.JS
// ==========================================


// ==========================================
// AUMENTAR FONTE
// ==========================================

let tamanhoFonte = 100;

function aumentarFonte() {

    if (tamanhoFonte < 160) {

        tamanhoFonte += 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";
    }
}


// ==========================================
// DIMINUIR FONTE
// ==========================================

function diminuirFonte() {

    if (tamanhoFonte > 70) {

        tamanhoFonte -= 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";
    }
}


// ==========================================
// ALTO CONTRASTE
// ==========================================

function altoContraste() {

    document.body.classList.toggle("alto-contraste");
}


// ==========================================
// LER PÁGINA
// ==========================================

function lerPagina() {

    // Verifica se o navegador suporta leitura
    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não suporta a função de leitura."
        );

        return;
    }

    // Para uma leitura anterior
    window.speechSynthesis.cancel();

    // Seleciona o conteúdo principal
    const conteudo = document.querySelector("main");

    if (!conteudo) {

        alert("Não foi possível encontrar o conteúdo da página.");

        return;
    }

    // Pega o texto
    const texto = conteudo.innerText;

    // Cria a fala
    const fala = new SpeechSynthesisUtterance(texto);

    // Configurações
    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;
    fala.volume = 1;

    // Começa a leitura
    window.speechSynthesis.speak(fala);
}


// ==========================================
// PARAR LEITURA
// ==========================================

function pararLeitura() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();
    }
}


// ==========================================
// FLASHCARDS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const flashcards =
        document.querySelectorAll("#atividades .card");

    flashcards.forEach(function (card) {

        card.style.cursor = "pointer";

        card.setAttribute("tabindex", "0");

        card.addEventListener("click", function () {

            mostrarResposta(card);

        });

        // Permite abrir com Enter ou Espaço
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


// ==========================================
// MOSTRAR RESPOSTA DO FLASHCARD
// ==========================================

function mostrarResposta(card) {

    let resposta =
        card.querySelector(".resposta-flashcard");

    // Se já existe, remove
    if (resposta) {

        resposta.remove();

        card.classList.remove("flashcard-aberto");

        return;
    }

    const titulo =
        card.querySelector("h3");

    if (!titulo) {
        return;
    }

    let textoResposta = "";

    // Flashcard 1
    if (titulo.textContent.includes("1")) {

        textoResposta =
            "Um sensor é um dispositivo capaz de detectar informações do ambiente, como luz, temperatura, distância e obstáculos.";
    }

    // Flashcard 2
    else if (titulo.textContent.includes("2")) {

        textoResposta =
            "Energia elétrica é a energia relacionada ao movimento das cargas elétricas e é utilizada para alimentar equipamentos.";
    }

    // Flashcard 3
    else if (titulo.textContent.includes("3")) {

        textoResposta =
            "O Arduino é uma plataforma eletrônica utilizada para criar e programar projetos de automação e robótica.";
    }

    // Flashcard 4
    else if (titulo.textContent.includes("4")) {

        textoResposta =
            "Um motor elétrico transforma energia elétrica em energia mecânica, produzindo movimento.";
    }

    // Cria a resposta
    resposta = document.createElement("div");

    resposta.className =
        "resposta-flashcard mt-3 p-3 rounded";

    resposta.innerHTML =
        "<strong>Resposta:</strong> " +
        textoResposta;

    // Coloca a resposta dentro do card
    const corpo =
        card.querySelector(".card-body");

    if (corpo) {

        corpo.appendChild(resposta);

    } else {

        card.appendChild(resposta);
    }

    card.classList.add("flashcard-aberto");
}


// ==========================================
// ATALHOS DO TECLADO
// ==========================================

document.addEventListener("keydown", function (event) {

    // Alt + A = aumentar fonte
    if (
        event.altKey &&
        event.key.toLowerCase() === "a"
    ) {

        event.preventDefault();

        aumentarFonte();
    }


    // Alt + D = diminuir fonte
    if (
        event.altKey &&
        event.key.toLowerCase() === "d"
    ) {

        event.preventDefault();

        diminuirFonte();
    }


    // Alt + C = alto contraste
    if (
        event.altKey &&
        event.key.toLowerCase() === "c"
    ) {

        event.preventDefault();

        altoContraste();
    }


    // ESC = parar leitura
    if (event.key === "Escape") {

        pararLeitura();
    }

});