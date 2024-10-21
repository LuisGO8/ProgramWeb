document.title="Clase de JS";
console.log(document.title);

const h1= document.createElement("h1");
h1.textContent="Mi texto desde JS";
document.body.appendChild(h1);

const p= document.createElement("p");
p.textContent="Texto desde JS";
document.body.appendChild(p);