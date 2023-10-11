console.clear()
const str = 'Paralelepipedo';
console.log(str.charAt[0] )
console.log(str[3])
console.log(str.charAt[7] )
console.log(str[3])


//Concatenar strings
let valor01 = 100;
const valor02 = 5;
console.log("A multiplicação de " + valor01 +" por " + valor02 + " é " + valor01 * valor02);

console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);


// Métodos de strings
console.clear();
const string01 = 'Instituto da Oportunidade Social';
// Acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);
// Acessando o décimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);
console.clear();
let texto = 'abcdefehijklmnopqrstuvxwyz';
console.log(texto.length);
// Maiusculo e minúsculo


console.clear();
const s = 'Hello World!';
console.log(s.toUpperCase());
console.log(s.toLowerCase());

const str_01 = 'Mozilla';
console.log(str_01.substring(1, 3));
// Saída esperada: "oz"
console.log(str_01.substring(2));
// Saída esperada: "zilla"


const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"
const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]