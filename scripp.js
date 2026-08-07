// ===================================
// AUMENTAR E DIMINUIR FONTE
// ===================================

let tamanhoFonte = 18;


function aumentarFonte() {

    if (tamanhoFonte < 30) {

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





// ===================================
// ALTO CONTRASTE
// ===================================


function altoContraste() {

    document.body.classList.toggle("alto-contraste");

}






// ===================================
// LEITOR DE VOZ
// ===================================


let leitura;



function lerPagina() {


    // Para uma leitura anterior

    window.speechSynthesis.cancel();



    let texto = document.getElementById("conteudo").innerText;



    leitura = new SpeechSynthesisUtterance(texto);



    // Idioma português

    leitura.lang = "pt-BR";



    // Velocidade da voz

    leitura.rate = 1;



    // Tom da voz

    leitura.pitch = 1;



    // Volume

    leitura.volume = 1;



    // Escolher voz em português

    let vozes = speechSynthesis.getVoices();



    let vozPortugues = vozes.find(function(voz){

        return voz.lang.includes("pt");

    });



    if(vozPortugues){

        leitura.voice = vozPortugues;

    }



    speechSynthesis.speak(leitura);


}






// ===================================
// PARAR LEITOR DE VOZ
// ===================================


function pararLeitura(){

    window.speechSynthesis.cancel();

}






// ===================================
// CARREGAR VOZES DO NAVEGADOR
// ===================================


window.speechSynthesis.onvoiceschanged = function(){

    speechSynthesis.getVoices();

};