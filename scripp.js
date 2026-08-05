// Controle do tamanho da fonte

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





// Alto contraste

function altoContraste(){

    document.body.classList.toggle("alto-contraste");

}





// LEITOR DE TELA

let lendo = false;


function lerPagina(){


    if(!('speechSynthesis' in window)){

        alert("Seu navegador não suporta leitura de texto.");

        return;

    }



    if(lendo){

        speechSynthesis.cancel();

        lendo = false;

        return;

    }



    let texto = document.querySelector("main").innerText;


    let voz = new SpeechSynthesisUtterance(texto);


    voz.lang = "pt-BR";


    voz.rate = 0.9; // velocidade da fala


    voz.pitch = 1; // tom da voz



    voz.onend = function(){

        lendo = false;

    };



    speechSynthesis.speak(voz);


    lendo = true;


}





// Tecla ESC para parar leitura

document.addEventListener("keydown", function(event){


    if(event.key === "Escape"){

        speechSynthesis.cancel();

        lendo = false;

    }


});