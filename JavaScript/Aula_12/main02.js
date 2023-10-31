let carro = document.getElementById("item1");

function mover() {
    carro.style.backgroundColor = "green";
}

function sair(){
    carro.style.backgroundColor = "grey";''  
}

function clicar() {
  let elemento = document.createElement("h1");
  elemento.innerHTML = "Benjamim";
  carro.appendChild(elemento);
}
