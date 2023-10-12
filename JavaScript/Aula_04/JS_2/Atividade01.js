//atividade 02 

let nome = window.prompt("Usuário:")  .toUpperCase()
let idade = window.prompt(`${nome} qual a sua idade?`)
let bairro = window.prompt("Qual seu bairro?")
let number01 = Number(window.prompt(`Primeiro numero inteiro `))
let number02 = Number(window.prompt(`Segundo numero inteiro`))
let soma = number01 + number02

window.alert(`A soma de ${number01} + ${number02} = ${soma}`)
