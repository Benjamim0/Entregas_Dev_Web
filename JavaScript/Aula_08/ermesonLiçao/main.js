//Imc
let kg = 70
let cm = 1.70

let calculoIMC = (peso, altura) => {
    return peso / (altura * altura)
}

console.log(`o seu IMC é:${calculoIMC(kg, cm).toFixed(2)}`);

if (calculoIMC(kg, cm) < 16,9) {
        console.log(`Você está muito abaixo do peso.`);
    }else 
    if (17 < calculoIMC(kg,cm) < 18,4) {
        console.log(`Você está abaixo do peso.`);

    }else 
    if (18 < calculoIMC(kg,cm) < 24,9) {
        console.log(`Você está no peso normal.`);

    }else 
    if (25 < calculoIMC(kg,cm) < 29,9) {
        console.log(`Você está acima do peso.`);

    }else 
    if (30 < calculoIMC(kg,cm) < 34,9) {
        console.log(`Você está com Obesidade grau I.`);

    }else 
    if (35 < calculoIMC(kg,cm) < 40) {
        console.log(`Você está com Obesidade grau II.`);

    }else 
    if (calculoIMC(kg,cm) > 40) {
        console.log(`Obesidade grau III.`);
    }else{
        console.log(`Insira valores válidos!`);

}

// EURO PRA REAL
let reais = 100

function conversao (real) {
    return 0.19 * real
}
console.log(`Se você possui ${reais} reais isso equivale a ${conversao(reais).toFixed(1)} euros`);


// BOTÃO RETORNÁVEL

const clique = () => {
    console.log(`Soma `);
}
const hover = () => {
    console.log(`Passe o mouse.`);
}