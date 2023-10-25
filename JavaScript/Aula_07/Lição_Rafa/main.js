let alunos = [
    {
      nome: "Benjamim",
      sobrenome: "Rodrigues",
      idade: "17",
      endereco: {
        rua: "Rua do Jambo",
        numero: 21,
        cidade: "São Paulo",
        estado: "São Paulo",
      },
      notas: [10, 9, 10, 10],
      nacionalidade: "Brasileiro",
      faltas: 2,
      renda: "Media",
    },
  
    {
      nome: "João",
      sobrenome: "Marques",
      idade: "19",
      endereco: {
        rua: "Rua dos morangos",
        numero: 274,
        cidade: "São Paulo",
        estado: "São Paulo",
      },
      notas: [8, 9, 10, 9],
      nacionalidade: "Brasileiro",
      faltas: 1,
      renda: "Media",
    },
  
    {
      nome: "Carlos",
      sobrenome: "Motta",
      idade: "19",
      endereco: {
        rua: "Rua dos coelhos",
        numero: 1102,
        cidade: "São Paulo",
        estado: "São Paulo",
      },
      notas: [8, 6, 10, 9],
      nacionalidade: "Brasileiro",
      faltas: 5,
      renda: "Alta",
    },
  ];
    for (let i of alunos ){  // Ele está indo os 3 objetos dentro de alunos
    let media = 0;
    for (let n of i.notas) {  // let n vai percorrer dentro do array notas que ta dentro do objetos
      media += n;
    }
    let mediaSoma = media / 4;
    if (mediaSoma >= 7) {
      console.log(
        `O ${i.nome},mora na(o) ${i.endereco.rua}, tem a média  ${mediaSoma}, então foi aprovado`
      );
    } else {
    console.log(
         `O ${i.nome}, mora na(o) ${i.endereco.rua}, tem a média de ${mediaSoma}, então foi reprovado`
      );
    }
  }

    

