"use strict";
(() => {
    const nombre = prompt("dime ");
    function saludar(nombre) {
        console.log("Hola, " + nombre + "!");
    }
    saludar("Juan"); // Imprime "Hola, Juan!"
})();
