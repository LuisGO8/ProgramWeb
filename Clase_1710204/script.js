document.title="Inicio de Sesión";
console.log(document.title);
//------------------------------------------------------

//crear el contenedor prinicpal para el formulario
const container= document.createElement("div");
container.style.margin="20px";

//crear titulo
const title=document.createElement("h2");
title.textContent="Iniciar sesión";
container.appendChild(title);

//crear el formulario
const form=document.createElement("form");

//crear campo de nombre de usuario
const usernamelabel=document.createElement("label");
usernamelabel.textContent="Nombre de usuario@";

const usernameInput=document.createElement("input");
usernameInput.type="text";
usernameInput.required=true;

form.appendChild(usernamelabel);
form.appendChild(usernameInput);

//crear campo de password de usuario
const passwordlabel=document.createElement("label");
passwordlabel.textContent="Contraseña";

const passwordInput=document.createElement("input");
passwordInput.type="password";
passwordInput.required=true;

form.appendChild(passwordlabel);
form.appendChild(passwordInput);

//crear el bton de envio
const submitButton=document.createElement("button");
submitButton.textContent="Iniciar Sesión";
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