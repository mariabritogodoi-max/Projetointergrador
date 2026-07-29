let tamanho = 18;


function aumentarFonte(){

tamanho += 2;

document.body.style.fontSize = tamanho+"px";

}



function diminuirFonte(){

tamanho -=2;

document.body.style.fontSize = tamanho+"px";

}



function contraste(){

document.body.classList.toggle("alto-contraste");

}