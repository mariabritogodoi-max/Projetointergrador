// CONTROLE DO TAMANHO DA FONTE

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





// MODO ALTO CONTRASTE

function altoContraste(){

    document.body.classList.toggle("alto-contraste");

}





// LEITOR DE TELA

function lerPagina(){


    // Verifica se o navegador possui suporte

    if('speechSynthesis' in window){


        let texto = document.body.innerText;


        let leitura = new SpeechSynthesisUtterance(texto);


        leitura.lang = "pt-BR";


        leitura.rate = 1;


        leitura.pitch = 1;



        window.speechSynthesis.cancel();


        window.speechSynthesis.speak(leitura);



    } else {


        alert("Seu navegador não possui suporte ao leitor de texto.");

    }


}





// PARAR LEITURA COM TECLA ESC

document.addEventListener("keydown", function(event){


    if(event.key === "Escape"){

        window.speechSynthesis.cancel();

    }


});