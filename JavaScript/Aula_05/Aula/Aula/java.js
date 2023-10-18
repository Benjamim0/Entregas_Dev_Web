// while
let contador = 1;

while (contador <= 50) {
  console.log(`Valor = ${contador}`);
  contador++;
}

// while com decremento
console.clear();
let cont = 10;
while (cont >= 0) {
  console.log(`Valor = ${cont}`);
  cont--;
}
// do{
//     instrucao1;
//     instrucao2;
//     instrucao3;
//     instrucaoN;
//     } while( condição );
//     proximaInstrucao;
// do-while

console.clear();
let i = 0,
  text = "";
do {
  text += `O número é ${i}\n`; // /n = quebra de linha ao somar
  i++;
} while (i < 100);
console.log(text);

// do-while
console.clear();
let j = 10,
  texto = "";
do {
  texto += `O número é ${j}\n`;
  j++;
} while (j < 10);
console.log(texto);

// For
console.clear();
for (let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);

// For - Decremento
console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);

// Laços de arrays
const frutas = [
  "Sente a pressão NENÉM",
  "Sente a pressão NENÉM",
  "Sente a pressão NENÉM",
  10,
  true,
];
console.clear();
for (let j = 0; j < frutas.length; j++)
  console.log(`VOCÊ ACHA QUE O SEU SOM É BOM: ${frutas[j]} \n`);

console.clear();
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  { 
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
// For overloop
for (let t of todos) {
  console.log(t);
  console.log(t.text);
  console.log(t.id);
}
