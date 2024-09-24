"use strict";
(() => {
    // Archivo: ejemplosReduce.ts
    /**
     * El método reduce() es un método poderoso que te permite reducir un array a un único valor.
     * Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha)
     * para reducirlo a un solo valor.
     */
    // Ejemplo 1: Sumar todos los números de un array
    const numeros = [1, 2, 3, 4, 5];
    const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log("Suma total:", sumaTotal); // Imprimirá: 15
    // Ejemplo 2: Encontrar el valor máximo en un array
    const numeros2 = [3, 7, 2, 9, 5];
    const valorMaximo = numeros2.reduce((max, numero) => Math.max(max, numero), -Infinity);
    console.log("Valor máximo:", valorMaximo); // Imprimirá: 9
    // Ejemplo 3: Contar la ocurrencia de cada palabra en un array
    const palabras = ["hola", "mundo", "hola", "TypeScript", "hola"];
    const conteoPalabras = palabras.reduce((contador, palabra) => {
        contador[palabra] = (contador[palabra] || 0) + 1;
        return contador;
    }, {});
    console.log("Conteo de palabras:", conteoPalabras);
    // Ejemplo 4: Aplanar un array anidado
    const arrayAnidado = [1, [2, 3], 4, [5, 6]];
    const arrayAplanado = arrayAnidado.reduce((acumulador, elemento) => {
        return acumulador.concat(Array.isArray(elemento) ? elemento : [elemento]);
    }, []);
    console.log("Array aplanado:", arrayAplanado);
    // Ejemplo 5: Agrupar elementos por una propiedad específica
    const personas = [
        { nombre: "Ana", edad: 30 },
        { nombre: "Juan", edad: 25 },
        { nombre: "María", edad: 30 }
    ];
    const personasAgrupadasPorEdad = personas.reduce((grupos, persona) => {
        (grupos[persona.edad] = grupos[persona.edad] || []).push(persona);
        return grupos;
    }, {});
    console.log("Personas agrupadas por edad:", personasAgrupadasPorEdad);
})();
