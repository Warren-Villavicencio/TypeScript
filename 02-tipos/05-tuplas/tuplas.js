"use strict";
(() => {
    // archivo: tuplas.ts
    // Definimos una tupla para representar un punto en un plano cartesiano
    let punto = [3, 4];
    // Accediendo a los elementos de la tupla
    console.log("Coordenada x:", punto[0]);
    console.log("Coordenada y:", punto[1]);
    // Definimos una tupla para representar una persona
    let persona = ["Juan", 30, true];
    // Accediendo a los elementos de la tupla
    console.log("Nombre:", persona[0]);
    console.log("Edad:", persona[1]);
    console.log("Es mayor de edad:", persona[2]);
    // Función que retorna una tupla con el nombre y la edad a partir de un objeto
    function obtenerNombreYEdad(persona) {
        return [persona.nombre, persona.edad];
    }
    let resultado = obtenerNombreYEdad({ nombre: "Ana", edad: 25 });
    console.log(resultado); // Imprime ["Ana", 25]
})();
