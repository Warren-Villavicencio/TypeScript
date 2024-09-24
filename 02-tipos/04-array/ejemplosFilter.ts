(()=>{
// Archivo: ejemplosFilter.ts

/**
 * El método filter() crea un nuevo array con todos los elementos que cumplan una condición específica.
 * Es decir, filtra los elementos de un array basado en una función de prueba.
 */

// Ejemplo 1: Filtrar números pares de un array
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log("Números pares:", numerosPares); // Imprimirá: [2, 4]

// Ejemplo 2: Filtrar cadenas que comienzan con una letra específica
const palabras = ["hola", "mundo", "TypeScript", "JavaScript"];
const palabrasConH = palabras.filter(palabra => palabra.startsWith("H"));
console.log("Palabras que comienzan con 'H':", palabrasConH); // Imprimirá: ["hola"]

// Ejemplo 3: Filtrar personas mayores de 30 años
interface Persona {
  nombre: string;
  edad: number;
}

const personas: Persona[] = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 32 }
];

const personasMayoresDe30 = personas.filter(persona => persona.edad > 30);
console.log("Personas mayores de 30 años:", personasMayoresDe30); // Imprimirá: [{ nombre: 'María', edad: 32 }]

// Ejemplo 4: Filtrar productos con un precio mayor a 2
const productos = [
  { nombre: "Manzana", precio: 1.5 },
  { nombre: "Banana", precio: 0.9 },
  { nombre: "Naranja", precio: 1.2 },
  { nombre: "Mango", precio: 2.5 }
];

const productosCaros = productos.filter(producto => producto.precio > 2);
console.log("Productos caros:", productosCaros); // Imprimirá: [{ nombre: 'Mango', precio: 2.5 }]

// Ejemplo 5: Filtrar elementos únicos en un array (usando un Set)
const numerosConRepetidos = [1, 2, 3, 2, 1, 4];
const numerosUnicos = [...new Set(numerosConRepetidos)];
console.log("Números únicos:", numerosUnicos); // Imprimirá: [1, 2, 3, 4]

})()