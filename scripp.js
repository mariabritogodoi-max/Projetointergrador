// =====================================
// AUMENTAR E DIMINUIR FONTES
// =====================================

let tamanhoFonte = 100;


function aumentarFonte() {

    if (tamanhoFonte < 180) {

        tamanhoFonte += 10;

        aplicarFonte();

    }

}



function diminuirFonte() {

    if (tamanhoFonte > 70) {

        tamanhoFonte -= 10;

        aplicarFonte();

    }

}



function aplicarFonte() {

    const textos = document.querySelectorAll(
        "h1, h2, h3, p, a, button, li"
    );


    textos.forEach(function(elemento){

        elemento.style.fontSize = tamanhoFonte + "%";

    });

}





// =====================================
// ALTO CONTRASTE
// =====================================

function altoContraste(){

    document.body.classList.toggle(
        "alto-contraste"
    );

}






// =====================================
// LEITOR DE VOZ
// =====================================

let leitura = null;



function lerPagina(){


    // Para uma leitura anterior

    speechSynthesis.cancel();



    const conteudo =
    document.getElementById("conteudo");



    if(!conteudo){

        alert("Conteúdo não encontrado!");

        return;

    }



    leitura =
    new SpeechSynthesisUtterance(
        conteudo.innerText
    );



    leitura.lang = "pt-BR";

    leitura.rate = 1;

    leitura.pitch = 1;

    leitura.volume = 1;



    let vozes =
    speechSynthesis.getVoices();



    let vozPortugues =
    vozes.find(function(voz){

        return voz.lang.includes("pt");

    });



    if(vozPortugues){

        leitura.voice = vozPortugues;

    }



    speechSynthesis.speak(leitura);


}







// =====================================
// PARAR LEITURA
// =====================================


function pararLeitura(){

    speechSynthesis.cancel();

}






// Carregar vozes do navegador

window.speechSynthesis.onvoiceschanged = function(){

    speechSynthesis.getVoices();

};