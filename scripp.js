// ===============================
// CONTROLE DE TAMANHO DA FONTE
// ===============================


let tamanhoFonte = 100;



function aumentarFonte(){

    tamanhoFonte += 10;

    document.body.style.fontSize = tamanhoFonte + "%";

}




function diminuirFonte(){

    if(tamanhoFonte > 70){

        tamanhoFonte -= 10;

        document.body.style.fontSize = tamanhoFonte + "%";

    }

}






// ===============================
// MODO ALTO CONTRASTE
// ===============================


function altoContraste(){

    document.body.classList.toggle("alto-contraste");

}






// ===============================
// LEITOR DE TEXTO
// ===============================


let fala;



function ouvirTexto(){


    // Para uma leitura anterior

    window.speechSynthesis.cancel();



    let texto = document.querySelector("main").innerText;



    fala = new SpeechSynthesisUtterance(texto);



    // Idioma português

    fala.lang = "pt-BR";



    // Velocidade da voz

    fala.rate = 0.9;



    // Volume

    fala.volume = 1;



    window.speechSynthesis.speak(fala);



}






// ===============================
// PARAR LEITURA
// ===============================


function pararLeitura(){


    window.speechSynthesis.cancel();


}






// ===============================
// ATALHO DE TECLADO
// ESC = PARAR VOZ
// ===============================


document.addEventListener("keydown", function(event){


    if(event.key === "Escape"){

        pararLeitura();

    }


});