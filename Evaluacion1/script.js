document.title="Evaluacion";
console.log(document.title);
//------------------------------------------------------

//crear el contenedor prinicpal para el formulario
const container= document.createElement("div");
container.style.margin="20px";


//Titulo de la pagina 
const title=document.createElement("h2");
title.textContent="Evaluación";
container.appendChild(title);

//Para el formulario
const form=document.createElement("form");


//INPUT nombre de usuario
const usernameInput=document.createElement("input");
usernameInput.placeholder="Nombre de usuari@";
usernameInput.type="text";
usernameInput.required=true;
form.appendChild(usernameInput);

//INPUT de ocupación
const ocupacion=document.createElement("input");
ocupacion.placeholder="Ocupación"
ocupacion.type="text";
ocupacion.required=true;
form.appendChild(ocupacion);


//INPUT para cambiar el color
const color=document.createElement("input");
color.type="color";
color.required=true;
form.appendChild(color);


//crear el boton de agregar
const submitButton=document.createElement("button");
submitButton.textContent="Agregar";
form.appendChild(submitButton);











//mensaje de respuesta
const message=document.createElement("p");
container.appendChild(form);
container.appendChild(message);

//agregar el contenido al cuerpo
document.body.appendChild(container);

















//datos de inicio de sesion predefinida
const validaUser="Juanito";
const validaPassword="2589";

//validar el nombre del user y el password
form.addEventListener("submit", (event)=>{
    event.preventDefault();

//validar lo que traiga de submit
if(usernameInput.value===validaUser && passwordInput.value===validaPassword){
    message.textContent="Bienvenido";//establece el mensaje
    message.style.color="green";//cambia el color del mensaje

}else{
    message.textContent = 'Nombre de usuario o contraseña';
    message.style.color="red";
}

//limpiar los input
usernameInput.value="";
passwordInput.value="";


});




const app = document.getElementById('app');

// Crea el botón que al hacer clic generará el contenedor
const botonCrearContenedor = document.createElement('button');
botonCrearContenedor.innerText = 'Crear Contenedor';
botonCrearContenedor.style.padding = '10px 15px';
botonCrearContenedor.style.backgroundColor = '#4CAF50';
botonCrearContenedor.style.color = 'white';
botonCrearContenedor.style.border = 'none';
botonCrearContenedor.style.borderRadius = '5px';
botonCrearContenedor.style.cursor = 'pointer';

// Crea el botón que al hacer clic eliminará el contenedor
const botonEliminarContenedor = document.createElement('button');
botonEliminarContenedor.innerText = 'Eliminar Contenedor';
botonEliminarContenedor.style.padding = '10px 15px';
botonEliminarContenedor.style.backgroundColor = '#f44336';
botonEliminarContenedor.style.color = 'white';
botonEliminarContenedor.style.border = 'none';
botonEliminarContenedor.style.borderRadius = '5px';
botonEliminarContenedor.style.cursor = 'pointer';
botonEliminarContenedor.style.marginLeft = '10px';
botonEliminarContenedor.style.display = 'none'; // Oculto inicialmente

// Función para crear el contenedor
const crearContenedor = () => {
    // Evita crear múltiples contenedores si ya existe uno
    if (document.getElementById('contenedor-dinamico')) {
        alert('El contenedor ya ha sido creado.');
        return;
    }

    // Crea el contenedor con un ID específico para poder verificar si ya existe
    const contenedorDinamico = document.createElement('div');
    contenedorDinamico.id = 'contenedor-dinamico';
    contenedorDinamico.style.width = '300px';
    contenedorDinamico.style.height = '200px';
    contenedorDinamico.style.backgroundColor = '#f4f4f9';
    contenedorDinamico.style.border = '2px solid #ddd';
    contenedorDinamico.style.borderRadius = '10px';
    contenedorDinamico.style.display = 'flex';
    contenedorDinamico.style.alignItems = 'center';
    contenedorDinamico.style.justifyContent = 'center';
    contenedorDinamico.style.marginTop = '20px';

    // Texto dentro del contenedor para indicar que fue creado
    const textoContenedor = document.createElement('p');
    textoContenedor.innerText = 'Este es un contenedor dinámico';
    textoContenedor.style.color = '#333';

    // Añadir el texto al contenedor y el contenedor al DOM
    contenedorDinamico.appendChild(textoContenedor);
    app.appendChild(contenedorDinamico);

    // Muestra el botón de eliminar
    botonEliminarContenedor.style.display = 'inline-block';
};

// Función para eliminar el contenedor
const eliminarContenedor = () => {
    const contenedorDinamico = document.getElementById('contenedor-dinamico');
    if (contenedorDinamico) {
        app.removeChild(contenedorDinamico);
        botonEliminarContenedor.style.display = 'none'; // Oculta el botón de eliminar
    } else {
        alert('No hay contenedor para eliminar.');
    }
};

// Asigna las funciones a los eventos de clic de los botones
botonCrearContenedor.onclick = crearContenedor;
botonEliminarContenedor.onclick = eliminarContenedor;

// Agrega los botones al DOM
app.appendChild(botonCrearContenedor);
app.appendChild(botonEliminarContenedor);





var ArrayInfo = [];

var x = 2;

var ctr = document.getElementById('tarjetas');

for (var i = 0; i < x; ++i) {

  var InfoDiv = document.createElement('div');
  InfoDiv.id = 'Info_Div' + i;
  InfoDiv.className = 'Info_Div';
  InfoDiv.style.width = "100px";
  InfoDiv.style.height = "30px";
  InfoDiv.style.display = "inline-block";

  ArrayInfo.push(InfoDiv);

  ctr.appendChild(InfoDiv);
}

for (i = 0; i < x; ++i) {

  ArrayInfo[i].innerHTML = usernameInput + i;
}