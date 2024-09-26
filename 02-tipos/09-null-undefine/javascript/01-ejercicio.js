"use strict";
(() => {
    var _a;
    // Undefined
    let nombre; // Declarada pero no inicializada, su valor es undefined
    console.log(nombre); // Imprime: undefined
    // Null
    let edad = null; // Indicamos que puede ser un número o null
    console.log(edad); // Imprime: null
    let persona1 = {
        nombre: "Juan"
    };
    // Creamos un objeto persona llamado "persona1"
    let persona1 = {
        nombre: "Juan" // Asignamos el nombre "Juan" a la persona
    };
    // Accedemos a la propiedad "edad" de persona1.
    // Si la edad no existe o es null, usamos el operador de fusión nula (??)
    // para asignar el valor "No proporcionada".
    console.log(`La edad de ${persona1.nombre} es: ${(_a = persona1.edad) !== null && _a !== void 0 ? _a : "No proporcionada"}`);
    // Definimos una función llamada "saludar" que recibe un nombre (string o null)
    // y devuelve un saludo.
    function saludar(nombre) {
        // Si el nombre es un string (no es null ni undefined),
        // construimos un saludo personalizado.
        if (nombre) {
            return `Hola, ${nombre}!`;
        }
        else { // Si el nombre es null o undefined, devolvemos un saludo genérico.
            return "Hola, desconocido!";
        }
    }
    // Llamamos a la función "saludar" con un nombre válido.
    console.log(saludar("Pedro"));
    // Llamamos a la función "saludar" con null para probar el manejo de valores nulos.
    console.log(saludar(null));
})();
