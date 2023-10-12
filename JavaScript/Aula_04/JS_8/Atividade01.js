//Atividade 08
alert("Calculando seu IMC (Índice de Massa Corporal)")

let altura = Number(window.prompt("Digite a sua altura em metros"))
let peso = Number(window.prompt("Agora digite o seu peso em quilograma (Kg)"))

let Imc = peso/altura  * 2
let imc = (alert(`O seu IMC é: ${Imc}`))
if (Imc>24.9) {
    alert("O IMC não está saudável.")
} else 
if (Imc<18.5){
    alert("O IMC não está saudável.")
} else {
    alert("O IMC está saudável.")
}