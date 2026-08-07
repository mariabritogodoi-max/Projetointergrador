// =============================
// CONTROLE DA FONTE
// =============================

let tamanhoFonte = 100;


function aumentarFonte(){

    if(tamanhoFonte < 180){

        tamanhoFonte += 10;

        document.querySelectorAll(
            "h1, h2, h3, p, a, button"
        ).forEach(function(elemento){

            elemento.style.fontSize = tamanhoFonte + "%";

        });

    }

}



function diminuirFonte(){

    if(tamanhoFonte > 70){

        tamanhoFonte -= 10;

        document.querySelectorAll(
            "h1, h2, h3, p, a, button"
        ).forEach(function(elemento){

            elemento.style.fontSize = tamanhoFonte + "%";

        });

    }

}




// =============================
// ALTO CONTRASTE
// =============================

function altoContraste(){

    document.body.classList.toggle("alto-contraste");

}




// =============================
// LEITOR DE VOZ
// =============================

let voz;


function lerPagina(){

    // para leitura anterior
    speechSynthesis.cancel();


    let texto = document.getElementById("conteudo").innerText;


    voz = new SpeechSynthesisUtterance(texto);


    voz.lang = "pt-BR";

    voz.rate = 1;

    voz.pitch = 1;

    voz.volume = 1;



    let listaVozes = speechSynthesis.getVoices();


    let vozPT = listaVozes.find(function(v){

        return v.lang.includes("pt");

    });



    if(vozPT){

        voz.voice = vozPT;

    }



    speechSynthesis.speak(voz);

}




// =============================
// PARAR LEITURA
// =============================

function pararLeitura(){

    speechSynthesis.cancel();

}