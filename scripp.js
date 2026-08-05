let tamanho = 100;


function aumentarFonte(){

    tamanho += 10;

    document.body.style.fontSize = tamanho + "%";

}



function diminuirFonte(){

    tamanho -= 10;

    document.body.style.fontSize = tamanho + "%";

}



function alternarContraste(){

    document.body.classList.toggle("alto-contraste");

}



const audio = document.getElementById("musica");

const botaoSom = document.getElementById("btnSom");


function toggleAudio(){

    if(audio.paused){

        audio.play();

        botaoSom.innerHTML="🔊 Desligar Som";

    }else{

        audio.pause();

        botaoSom.innerHTML="🎵 Som";

    }

}



function lerPagina(){

    let texto = document.body.innerText;

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang="pt-BR";

    speechSynthesis.speak(fala);

}