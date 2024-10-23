//funcion normal
function hola(a, b){
    return a+b;
}
console.log(hola(3,5));

//convertir a funcion flecha
const suma=(a,b)=>{
    return a+b;
}
console.log(suma(3,5));

//simplifica
const suma2 =(a,b)=>a+b;
console.log(suma2(3,5));

//solo un parametro
const cuadrado=x=>x*x;
console.log(cuadrado(5));