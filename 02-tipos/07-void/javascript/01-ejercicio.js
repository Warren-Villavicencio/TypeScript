"use strict";
(() => {
    const nombre = prompt("dime tu nombre");
    function saludar(nombre) {
        console.log("Hola, " + nombre + "!");
    }
    saludar(); // Imprime "Hola, Juan!"
})();
