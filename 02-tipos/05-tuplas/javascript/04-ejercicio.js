"use strict";
(() => {
    // Función para crear un elemento HTML
    function crearElemento(tag, contenido) {
        const elemento = document.createElement(tag);
        elemento.textContent = contenido;
        return elemento;
    }
    // Obtener el nombre del usuario
    const nombre = prompt("Bienvenido, ¿cuál es tu nombre?");
    const saludo = { nombre, mensaje: "¡Estás listo!" };
     || ;
    // Crear un elemento de saludo
    const saludoElemento = crearElemento("h1", `Hola, ${saludo.nombre}! ${saludo.mensaje}`);
    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(saludoElemento);
})();
