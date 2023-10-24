alert("Calculando seu IMC (Índice de Massa Corporal)");

let altura = Number(window.prompt("Digite a sua altura em metros"));
let peso = Number(window.prompt("Agora digite o seu peso em quilograma (Kg)"));

let Imc = (peso / altura) * 2;
let imc = alert(`O seu IMC é: ${Imc}`);
if (Imc > 16.9) {
  alert("Muito abaixo do peso.");
} else  if (Imc => 17 && Imc < 18.4)  {
  alert("Abaixo do peso.");
} else {
  alert("Recarregue a pagina.");
} 


const Clique = () => {
    console.log('Você consegue');
}
 
const Passe = () => {
    console.log('Passe novamente');
}