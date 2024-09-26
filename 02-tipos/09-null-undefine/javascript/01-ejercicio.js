"use strict";
(() => {
    // Undefined
    let nombre; // Declarada pero no inicializada, su valor es undefined
    console.log(nombre); // Imprime: undefined
    // Null
    let edad = null; // Indicamos que puede ser un número o null
    console.log(edad); // Imprime: null
    let persona1 = {
        nombre: "Juan"
    };
    console.log(persona1.edad); // Imprime: undefined (la propiedad no existe)
    // Manejo de errores
    function saludar(nombre) {
        if (nombre) {
            return `Hola, ${nombre}!`;
        }
        else {
            return "Hola, desconocido!";
        }
    }
    console.log(saludar(null)); // Imprime: Hola, desconocido!
})();
