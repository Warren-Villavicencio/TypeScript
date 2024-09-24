(()=>{

    // Archivo: ejemplosEvery.ts

/**
 * El método every() se utiliza para determinar si todos los elementos de un array
 * cumplen con una condición específica. Devuelve un valor booleano (true o false).
 * A diferencia de some(), every() debe cumplirse para todos los elementos.
 */

// Ejemplo 1: Verificar si todos los números son pares
const numeros = [2, 4, 6, 8];
const todosPares = numeros.every(numero => numero % 2 === 0);
console.log("Todos los números son pares:", todosPares); // Imprimirá: true

// Ejemplo 2: Verificar si todas las cadenas tienen una longitud mayor a 3
const palabras = ["hola", "mundo", "TypeScript"];
const todasMasDeTresLetras = palabras.every(palabra => palabra.length > 3);
console.log("Todas las palabras tienen más de 3 letras:", todasMasDeTresLetras); // Imprimirá: true

// Ejemplo 3: Verificar si todas las personas tienen una edad mayor a 18
interface Persona {
  nombre: string;
  edad: number;
}

const personas: Persona[] = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 32 }
];

const todosMayoresDeEdad = personas.every(persona => persona.edad >= 18);
console.log("Todas las personas son mayores de edad:", todosMayoresDeEdad); // Imprimirá: true

// Ejemplo 4: Verificar si todos los elementos de un array son de tipo número
const numerosYCadenas = [1, 2, "tres", 4];
const todosSonNumeros = numerosYCadenas.every(elemento => typeof elemento === 'number');
console.log("Todos los elementos son números:", todosSonNumeros); // Imprimirá: false

// Ejemplo 5: Verificar si todos los objetos tienen una propiedad específica
const productos = [
  { nombre: "Manzana", precio: 1.5, categoria: "Frutas" },
  { nombre: "Banana", precio: 0.9, categoria: "Frutas" },
  { nombre: "Naranja", precio: 1.2, categoria: "Frutas" }
];

const todosSonFrutas = productos.every(producto => producto.categoria === "Frutas");
console.log("Todos los productos son frutas:", todosSonFrutas); // Imprimirá: true


})()