// focus
//async = função assincrona (trabalha com promessas)
const buscarcep = async () => {
  const cep = document.querySelector("#cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const valorEndereco = await fetch(url);
  const valor = await valorEndereco.json();
  atualizarPag(valor);
}
const atualizarPag = (valor) => {
  document.querySelector("#endereço").value = valor.logradouro;
  document.querySelector("#bairro").value = valor.bairro;
}
document.querySelector("#cep").addEventListener("focusout", buscarcep);