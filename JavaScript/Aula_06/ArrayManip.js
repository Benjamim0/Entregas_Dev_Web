//Pop() - remover um elemento da última posição do seu array

//Push() - Adicionar um elemento na última posição do seu array 
let mercado = ["morango", "Banana","Kiwi","Carambola","Graviola"]

let fruta1 = mercado.pop()
console.log(fruta1);
console.log(mercado.length);
console.log(mercado); 
mercado.push("paralepipido")
console.log(mercado.length);
console.log(mercado);

//shift - vai remover um elemento no começo do array
//unshift vai colocar um elemento no começo do array

mercado.shift()
console.log(mercado)

mercado.unshift('melão')
console.log(mercado);

delete mercado[4]
console.log(mercado);
