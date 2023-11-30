let funcionarios = [
    {
        nome: "Wally",
        salario: 4800
    },
    {
        nome: "Carlos",
        salario: 6200
    },
    {
        nome: "João",
        salario: 6300
    },
    {
        nome: "Marcos",
        salario: 3000
    },
    {
        nome: "Pedro",
        salario: 6500
    },

// EXIBIÇÃO DOS FUNCIONÁRIOS
]
funcionarios.forEach ((respectivo) => {
    console.log(`O funcionário ${respectivo.nome} possui o salário de ${respectivo.salario} reais`);
});
console.log(`Os novos salários com a correção seram:`);


// SALÁRIO CORRIGIDO
let novoSalário = funcionarios.map ((salarios) => {
    return ((salarios.salario) * 1.05);
})
console.log(novoSalário);


// FILTRO
let filtroSalarial = funcionarios.filter((salario) => {
    return salario.salario > 5000
})
console.log(`Os funcionários que possuem salário maior do que 5000 reais são:`);
console.log(filtroSalarial);


// PROCURANDO O WALLY
let cadeWally = funcionarios.find((procura) =>{
    return procura.nome === "Wally"
})

console.log(cadeWally);