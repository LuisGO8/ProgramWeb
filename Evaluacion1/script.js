document.title = "Evaluacion";
console.log(document.title);
//------------------------------------------------------

// Crear el contenedor principal para el formulario
const container = document.createElement("div");
container.style.margin = "20px";

// Titulo de la página
const title = document.createElement("h2");
title.textContent = "Evaluación";
container.appendChild(title);

// Para el formulario
const form = document.createElement("form");
form.method = "post";

// INPUT nombre de usuario
const nombre = document.createElement("input");
nombre.placeholder = "Nombre de usuari@";
nombre.type = "text";
nombre.required = true;
form.appendChild(nombre);

// INPUT de ocupación
const ocupacion = document.createElement("input");
ocupacion.placeholder = "Ocupación";
ocupacion.type = "text";
ocupacion.required = true;
form.appendChild(ocupacion);

// INPUT para cambiar el color
const color = document.createElement("input");
color.type = "color";
color.required = true;
form.appendChild(color);

// Crear el botón de agregar
const submitButton = document.createElement("button");
submitButton.textContent = "Agregar";
form.appendChild(submitButton);

let tarjetas = [];  // Usar 'let' para poder modificar el array

// Crear el contenedor de tarjetas y aplicar Flexbox
const cardContainer = document.createElement('div');
cardContainer.id = 'tarjetas'; // Asignamos el id
cardContainer.style.display = "flex";   // Hacer que el contenedor use Flexbox
cardContainer.style.flexWrap = "wrap"; // Permitir que las tarjetas se acomoden en múltiples filas
cardContainer.style.justifyContent = "flex-start"; // Alineación de las tarjetas al inicio
container.appendChild(cardContainer);

// Manejo del formulario
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nom = nombre.value;
    const ocu = ocupacion.value;
    const col = color.value;

    if (nom && ocu) {
        createCard(nom, ocu, col);
        tarjetas.push({ nom, ocu, col }); // Añadimos al array de tarjetas
        form.reset(); // Reiniciar el formulario después de agregar
        console.log("Tarjeta creada", tarjetas);
    } else {
        alert("Complete los campos");
    }
});

// Función para crear las tarjetas
const createCard = (nom, ocu, col) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = col; // Usamos 'backgroundColor'
    
    // Establecer el tamaño máximo y márgenes de la tarjeta
    card.style.width = "300px"; // Establecer un ancho fijo para la tarjeta
    card.style.margin = "10px";  // Agregar márgenes entre tarjetas
    card.style.padding = "15px"; // Agregar espacio interno a la tarjeta
    card.style.borderRadius = "8px"; // Redondear las esquinas
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Añadir sombra ligera para mejorar la apariencia

    // Crear contenido de la tarjeta
    const cardContent = document.createElement('div');
    cardContent.innerHTML = `<strong>${nom}</strong><br><span>${ocu}</span>`;

    // Botón para eliminar la tarjeta
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    
    // Aquí pasamos la referencia correcta a la función removeCard
    deleteButton.addEventListener('click', () => {
        removeCard(nom); // Pasamos 'nom' correctamente
        cardContainer.removeChild(card); // Eliminar la tarjeta de la vista
    });

    // Agregar el contenido y el botón a la tarjeta
    card.append(cardContent, deleteButton);

    // Agregar la tarjeta al contenedor de tarjetas
    cardContainer.appendChild(card);
};

// Función para eliminar la tarjeta del array
const removeCard = (name) => {
    // Filtrar la tarjeta del array usando el 'name' de la tarjeta
    tarjetas = tarjetas.filter(card => card.nom !== name);
    console.log("Tarjetas después de eliminar:", tarjetas); // Verifica el contenido del array
};

// Agregar el contenido al cuerpo
document.body.appendChild(container);
container.appendChild(form);