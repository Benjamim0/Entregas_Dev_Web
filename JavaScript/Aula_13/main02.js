let calcular = document.querySelector('#calcular')// Aplicando elemneto
document.addEventListener('click' , mediaAluno) // Escutador

function mediaAluno() {
  let nota1 = Number(document.querySelector("#nt1").value);
  let nota2 = Number(document.querySelector("#nt2").value);
  let result = document.querySelector("#txt");
  const media = (nota1 + nota2) / 2;
  result.innerHTML = `A media é: ${media}`;
}               

