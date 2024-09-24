(()=>{

// Archivo: ejemplosSome.ts

/**
 * El método some() se utiliza para determinar si al menos un elemento de un array
 * cumple con una condición específica. Devuelve un valor booleano (true o false).
 */

// Ejemplo 1: Verificar si hay algún número par en un array
const numeros = [1, 3, 5, 7, 9];
const hayPar = numeros.some(numero => numero % 2 === 0);
console.log("Hay algún número par:", hayPar); // Imprimirá: false

// Ejemplo 2: Verificar si alguna cadena comienza con una letra específica
const palabras = ["hola", "mundo", "TypeScript"];
const comienzaConH = palabras.some(palabra => palabra.startsWith("H"));
console.log("Alguna palabra comienza con 'H':", comienzaConH); // Imprimirá: true

// Ejemplo 3: Buscar un objeto específico en un array de objetos
interface Persona {
  nombre: string;
  edad: number;
}

const personas: Persona[] = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 32 }
];

const existePersonaConEdad30 = personas.some(persona => persona.edad === 30);
console.log("Existe una persona con 30 años:", existePersonaConEdad30); // Imprimirá: true

// Ejemplo 4: Verificar si un array de números contiene algún número negativo
const numerosConNegativos = [-2, 4, -1, 7];
const hayNegativos = numerosConNegativos.some(numero => numero < 0);
console.log("Hay algún número negativo:", hayNegativos); // Imprimirá: true

// Ejemplo 5: Verificar si todas las cadenas tienen una longitud mayor a 5
const palabrasLargas = ["JavaScript", "TypeScript", "Programación"];
const todasMasDe5Caracteres = palabrasLargas.every(palabra => palabra.length > 5); // Usando every para contrastar
console.log("Todas las palabras tienen más de 5 caracteres:", todasMasDe5Caracteres); // Imprimirá: true

// Ejemplo 6: Buscar un elemento en un array de objetos utilizando una propiedad específica
const productos = [
  { nombre: "Manzana", precio: 1.5 },
  { nombre: "Banana", precio: 0.9 },
  { nombre: "Naranja", precio: 1.2 }
];

const hayProductoConPrecioMayorA2 = productos.some(producto => producto.precio > 2);
console.log("Hay algún producto con precio mayor a 2:", hayProductoConPrecioMayorA2); // Imprimirá: false


})()