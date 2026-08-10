// ==========================================
// PORTAL INCLUSIVO - ACESSIBILIDADE
// ==========================================

let tamanhoFonte = 100;


// ==========================================
// AUMENTAR FONTE
// ==========================================

function aumentarFonte() {

    if (tamanhoFonte < 160) {
        tamanhoFonte += 10;
    }

    document.documentElement.style.fontSize =
        tamanhoFonte + "%";
}


// ==========================================
// DIMINUIR FONTE
// ==========================================

function diminuirFonte() {

    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
    }

    document.documentElement.style.fontSize =
        tamanhoFonte + "%";
}


// ==========================================
// ALTO CONTRASTE
// ==========================================

function altoContraste() {

    document.body.classList.toggle("alto-contraste");

}


// ==========================================
// LER A PÁGINA
// ==========================================

function lerPagina() {

    pararLeitura();

    const texto = document.body.innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


// ==========================================
// PARAR LEITURA
// ==========================================

function pararLeitura() {

    window.speechSynthesis.cancel();

}


// ==========================================
// PERGUNTAS DOS FLASHCARDS
// ==========================================

const flashcards = {

    1: {
        pergunta: "O que é um sensor?",
        resposta: "Um sensor é um dispositivo que detecta informações do ambiente, como luz, temperatura, distância ou movimento.",
        palavras: [
            "dispositivo",
            "detecta",
            "ambiente",
            "informação",
            "luz",
            "temperatura",
            "distância",
            "movimento"
        ]
    },

    2: {
        pergunta: "O que é energia elétrica?",
        resposta: "Energia elétrica é a energia associada ao movimento das cargas elétricas e é utilizada para alimentar diversos equipamentos.",
        palavras: [
            "energia",
            "eletricidade",
            "cargas",
            "elétricas",
            "equipamentos",
            "movimento"
        ]
    },

    3: {
        pergunta: "Para que serve o Arduino?",
        resposta: "O Arduino serve para programar e controlar projetos eletrônicos e de robótica.",
        palavras: [
            "arduino",
            "programar",
            "controlar",
            "projetos",
            "eletrônicos",
            "robótica",
            "robotica"
        ]
    },

    4: {
        pergunta: "Como funciona um motor elétrico?",
        resposta: "Um motor elétrico transforma energia elétrica em movimento.",
        palavras: [
            "transforma",
            "energia",
            "elétrica",
            "eletrica",
            "movimento",
            "energia elétrica"
        ]
    }

};


// ==========================================
// FALAR TEXTO
// ==========================================

function falar(texto) {

    window.speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


// ==========================================
// OUVIR PERGUNTA
// ==========================================

function ouvirPergunta(numero) {

    const flashcard = flashcards[numero];

    falar(flashcard.pergunta);

}


// ==========================================
// RECONHECIMENTO DE VOZ
// ==========================================

const ReconhecimentoVoz =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


// ==========================================
// RESPONDER POR VOZ
// ==========================================

function responderPorVoz(numero) {

    if (!ReconhecimentoVoz) {

        const mensagem =
            "Seu navegador não possui reconhecimento de voz. " +
            "Tente utilizar o Google Chrome ou outro navegador compatível.";

        document.getElementById("resultado" + numero).innerHTML =
            `<div class="alert alert-danger">${mensagem}</div>`;

        falar(mensagem);

        return;
    }


    const reconhecimento = new ReconhecimentoVoz();

    reconhecimento.lang = "pt-BR";

    reconhecimento.continuous = false;

    reconhecimento.interimResults = false;

    reconhecimento.maxAlternatives = 1;


    const resultado =
        document.getElementById("resultado" + numero);


    resultado.innerHTML = `
        <div class="alert alert-info">
            🎤 Estou ouvindo... Fale sua resposta.
        </div>
    `;


    falar("Estou ouvindo. Fale sua resposta.");


    reconhecimento.start();


    reconhecimento.onresult = function(event) {

        const respostaUsuario =
            event.results[0][0].transcript;

        verificarResposta(
            numero,
            respostaUsuario
        );

    };


    reconhecimento.onerror = function(event) {

        resultado.innerHTML = `
            <div class="alert alert-danger">
                Não consegui entender sua resposta.
                Tente novamente.
            </div>
        `;

        falar(
            "Não consegui entender sua resposta. " +
            "Tente novamente."
        );

    };


    reconhecimento.onend = function() {

        console.log("Reconhecimento de voz encerrado.");

    };

}


// ==========================================
// VERIFICAR RESPOSTA
// ==========================================

function verificarResposta(numero, respostaUsuario) {

    const flashcard = flashcards[numero];

    const resultado =
        document.getElementById("resultado" + numero);


    const respostaNormalizada =
        removerAcentos(
            respostaUsuario.toLowerCase()
        );


    let acertos = 0;


    flashcard.palavras.forEach(function(palavra) {

        const palavraNormalizada =
            removerAcentos(
                palavra.toLowerCase()
            );

        if (
            respostaNormalizada.includes(
                palavraNormalizada
            )
        ) {

            acertos++;

        }

    });


    // Pelo menos uma palavra relacionada
    // precisa aparecer na resposta.

    if (acertos >= 1) {

        resultado.innerHTML = `
            <div class="alert alert-success">

                <strong>✅ Muito bem!</strong>

                <br><br>

                Você respondeu:

                <br>

                <em>"${respostaUsuario}"</em>

                <br><br>

                <strong>Resposta esperada:</strong>

                ${flashcard.resposta}

            </div>
        `;


        falar(
            "Muito bem! " +
            flashcard.resposta
        );

    } else {

        resultado.innerHTML = `
            <div class="alert alert-warning">

                <strong>💡 Vamos tentar novamente!</strong>

                <br><br>

                Você respondeu:

                <br>

                <em>"${respostaUsuario}"</em>

                <br><br>

                <strong>Dica:</strong>

                ${flashcard.resposta}

            </div>
        `;


        falar(
            "Vamos tentar novamente. " +
            "A resposta correta é: " +
            flashcard.resposta
        );

    }

}


// ==========================================
// REMOVER ACENTOS
// ==========================================

function removerAcentos(texto) {

    return texto.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}