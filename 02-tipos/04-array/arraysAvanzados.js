"use strict";
(() => {
    // Archivo: arraysAvanzados.ts
    /**
     * Este archivo demuestra el uso de métodos avanzados de arrays en TypeScript:
     * - forEach: Itera sobre cada elemento de un array y ejecuta una función de callback.
     * - some: Determina si al menos un elemento cumple con una condición dada.
     * - every: Determina si todos los elementos cumplen con una condición dada.
     * - map: Crea un nuevo array aplicando una función de transformación a cada elemento.
     * - filter: Crea un nuevo array con los elementos que cumplen una condición dada.
     * - reduce: Reduce un array a un único valor aplicando una función acumuladora.
     */
console.log ("ejemplo 0: forEach"
    const frutas = ["apple","strberry"];
)



    // Ejemplo 1: forEach - Iterar sobre un array y mostrar cada elemento
    console.log("Ejemplo 1: forEach");
    const numeros = [1, 2, 3, 4, 5];
    numeros.forEach((numero) => {
        console.log(numero); // Imprime cada número en la consola
    });
    // Ejemplo 2: some - Verificar si al menos un número es par
    console.log("Ejemplo 2: some");
    const hayPar = numeros.some((numero) => numero % 2 === 0);
    console.log("¿Hay algún número par?", hayPar);
    // Ejemplo 3: every - Verificar si todos los números son pares
    console.log("Ejemplo 3: every");
    const todosPares = numeros.every((numero) => numero % 2 === 0);
    console.log("¿Todos los números son pares?", todosPares);
    // Ejemplo 4: map - Crear un nuevo array con los números al cuadrado
    console.log("Ejemplo 4: map");
    const cuadrados = numeros.map((numero) => numero * numero);
    console.log("Cuadrados:", cuadrados);
    // Ejemplo 5: filter - Filtrar números mayores a 3
    console.log("Ejemplo 5: filter");
    const mayoresA3 = numeros.filter((numero) => numero > 3);
    console.log("Números mayores a 3:", mayoresA3);
    // Ejemplo 6: reduce - Sumar todos los números del array
    console.log("Ejemplo 6: reduce");
    const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log("Suma total:", sumaTotal);
})();
