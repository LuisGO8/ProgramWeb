/*/Definicion de una funcion 

function hello(){
    console.log("Hola Clase");
    console.log("5IV7");
}

//LLamada a la función
hello();
hello();
hello();
hello();
hello(); 

//Retorno de una funcion 
function hello(){
    return 'Hola Clase';
}
const result = hello()
console.log(result);

//Función que retorna otra función
function hello(){
    return function(){
        return 'Funcion 2';
    }
}
console.log(hello()());

//Función con un parametro  
function add(x){
    console.log(x);
}

add(5);


//Función con parametros 
function add(x, y=0){
    console.log(x + y);
}
add(5,undefined);

//Control de error en multiparametos
function add(x, y){
    if(y===undefined){
        y=0
    }
    console.log(x + y);
}
add(5,undefined);



//Parametro de tipo cadena 
function add(name){
    console.log('Hola' + name);
}
add(" Clase JS")

*/


//OBJETOS
const user = {
    nombre : 'Regina',
    appat : 'Herrera',
    apmat : 'Macedo',
    edad : 17,
    direccion : {
        calle : 'Juan de dios Bátiz',
        no:9,
        colonia: 'IPN',
        delegacion: 'Miguel Hidalgo'
    },
    amigos:['Raul', 'Maria'],
    activo:true
}

//Consola debe de tener nombr, appat, apmat 
//Alert activo
//Consola edad
//Alert calle, no, colonia, delegacion
//Console amigos

function estado(user){
    if(user.activo==true){
        alert("Activo");
    }else{
        alert(error);
    }
    
};
estado(user);

function datos(user){
    let x;
    for(x=0; x<3; x++){
        console.log(user[x]);
    }
}
datos(user);