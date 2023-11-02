// //QuerySelector = seleciona um elemento 
// let titulo = window.document.querySelector('#titulo')
// titulo.style.color = 'yellow'

let par = document.querySelectorAll('p')    

for(let cont = 0;cont < par.length; cont++) 
{
    par[cont].style.color = 'red'
}
//QuerySelectorAll = seleciona todos os elementos 
