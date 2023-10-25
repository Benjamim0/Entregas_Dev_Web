//Imc
let kg = 70
let cm = 1.70

let calculoIMC = (peso, altura) => {
    return peso / (altura * altura)
}

console.log(`O seu IMC é:${calculoIMC(kg, cm).toFixed(2)}`);

if (calculoIMC(kg, cm) < 16,9) {
        console.log(`Muito abaixo do peso.`);
    }else 
    if (17 < calculoIMC(kg,cm) < 18,4) {
        console.log(`Abaixo do peso.`);
    }else 
    if (18 < calculoIMC(kg,cm) < 24,9) {
        console.log(`Peso normal.`);
    }else 
    if (25 < calculoIMC(kg,cm) < 29,9) {
        console.log(`Acima do peso.`);
    }else 
    if (30 < calculoIMC(kg,cm) < 34,9) {
        console.log(`Obesidade grau I.`);
    }else 
    if (35 < calculoIMC(kg,cm) < 40) {
        console.log(`Obesidade grau II.`);
    }else 
    if (calculoIMC(kg,cm) > 40) {
        console.log(`Obesidade grau III.`);
    }else{
        console.log(`Coloque algo válido!`);
}
// EURO PRA REAL
let reais = 100

function conversao (real) {
    return 0.19 * real
}
console.log(`Seus ${reais} reais equivalem a ${conversao(reais).toFixed(1)} euros`);
// BOTÃO RETORNÁVEL
const clique = () => {
    console.log(`Você está clicando`);
}
const houver = () => {
    console.log(`Passe o mouse.`);
}