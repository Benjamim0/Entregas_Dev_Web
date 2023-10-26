window.alert("Seja Bem-vindo a minha pagina!");
document.title = "Dom é bom";
let section = document.createElement("section");
let article = document.createElement("article");
let h1 = document.createElement("h1");
let prgf = document.createElement("p");
document.title = "Demostração de DOM";

h1.innerHTML = "Obrigado Dias";
prgf.innerHTML = "Você é um amigo amigo";
section.style.backgroundColor = "   ";
section.style.border = "2px solid black ";
article.style.border = "2px solid black";

document.body.appendChild(section);
document.body.appendChild(article);

section.appendChild(h1);
article.appendChild(prgf);
