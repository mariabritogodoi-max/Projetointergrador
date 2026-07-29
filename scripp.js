let tamanho = 18;


// aumentar fonte

function aumentarFonte(){

tamanho += 2;

document.body.style.fontSize = tamanho + "px";

}



// diminuir fonte

function diminuirFonte(){

if(tamanho > 12){

tamanho -= 2;

document.body.style.fontSize = tamanho + "px";

}

}



// modo alto contraste

function contraste(){

document.body.classList.toggle("contraste");

}