(()=>{

// Archivo: ejemplosMap.ts

/**
 * El método map() crea un nuevo array aplicando una función a cada elemento del array original.
 * La función de callback recibe el elemento actual, su índice y el array original.
 * Retorna un nuevo array con los resultados de la función aplicada a cada elemento.
 */

// Ejemplo 1: Duplicar cada número de un array
const numeros = [1, 2, 3, 4, 5];
const numerosDobles = numeros.map(numero => numero * 2);
console.log("Números doblados:", numerosDobles); // Imprimirá: [2, 4, 6, 8, 10]

// Ejemplo 2: Convertir un array de números a un array de cadenas
const numerosComoCadenas = numeros.map(numero => numero.toString());
console.log("Números como cadenas:", numerosComoCadenas); // Imprimirá: ["1", "2", "3", "4", "5"]

// Ejemplo 3: Extraer una propiedad específica de un array de objetos
interface Persona {
  nombre: string;
  edad: number;
}

const personas: Persona[] = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 32 }
];

const nombres = personas.map(persona => persona.nombre);
console.log("Nombres:", nombres); // Imprimirá: ["Ana", "Juan", "María"]

// Ejemplo 4: Crear un nuevo array con objetos modificados
const productos = [
  { nombre: "Manzana", precio: 1.5 },
  { nombre: "Banana", precio: 0.9 },
  { nombre: "Naranja", precio: 1.2 }
];

const productosConDescuento = productos.map(producto => ({
  ...producto,
  precioConDescuento: producto.precio * 0.9
}));
console.log("Productos con descuento:", productosConDescuento);

// Ejemplo 5: Convertir un array de temperaturas en Celsius a Fahrenheit
const temperaturasCelsius = [0, 10, 20, 30];
const temperaturasFahrenheit = temperaturasCelsius.map(celsius => celsius * 9/5 + 32);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);


})()