// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar la lista de amigos.
let amigos = [];

// Función para agregar un amigo a la lista.
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim(); // .trim() elimina espacios en blanco al inicio y al final.

    // Validación para no agregar nombres vacíos.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return; // Detiene la ejecución de la función.
    }

    // Validación para no agregar nombres duplicados.
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado. Intenta con otro.');
        nombreInput.value = ''; // Limpia el campo de texto.
        return;
    }
    
    // Agrega el nombre al array.
    amigos.push(nombre);

    // Actualiza la lista visible en el HTML.
    actualizarLista();

    // Limpia el campo de texto para el siguiente nombre.
    nombreInput.value = '';
}

// Función para realizar el sorteo.
function sortearAmigo() {
    // Validación para asegurar que hay suficientes amigos para el sorteo.
    if (amigos.length < 3) {
        alert('Debes agregar al menos 3 amigos para realizar el sorteo.');
        return;
    }

    // Desordena (baraja) el array de amigos de forma aleatoria.
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Intercambio de elementos
    }

    // Asigna los pares y muestra el resultado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados anteriores.

    for (let i = 0; i < amigos.length; i++) {
        // El último amigo le toca al primero para cerrar el círculo.
        let amigoSecreto = i === amigos.length - 1 ? amigos[0] : amigos[i + 1];
        
        // Crea un elemento de lista y lo añade al HTML.
        const parrafo = document.createElement('li');
        parrafo.textContent = `${amigos[i]}  →  ${amigoSecreto}`;
        resultado.appendChild(parrafo);
    }
}

// Función para actualizar la lista de amigos en pantalla.
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual para no duplicar.

    amigos.forEach(amigo => {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        listaAmigos.appendChild(elemento);
    });
}

// Función para reiniciar todo el juego.
function reiniciar() {
    amigos = []; // Vacía el array.
    document.getElementById('listaAmigos').innerHTML = ''; // Limpia la lista visible.
    document.getElementById('resultado').innerHTML = ''; // Limpia el resultado.
    document.getElementById('amigo').value = ''; // Limpia el campo de texto.
}