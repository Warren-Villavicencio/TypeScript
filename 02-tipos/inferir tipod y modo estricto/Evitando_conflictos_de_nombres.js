"use strict";
let nombre = "Juan";
(function (nombre) {
    console.log("Hola, " + nombre); // Imprimirá "Hola, Pedro"
})("Pedro");
console.log(nombre); // Imprimirá "Juan" (el valor original)
