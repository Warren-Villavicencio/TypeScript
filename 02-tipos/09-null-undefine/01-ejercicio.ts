(()=>{
  // Undefined
let nombre; // Declarada pero no inicializada, su valor es undefined
console.log(nombre); // Imprime: undefined

// Null
let edad: number | null = null; // Indicamos que puede ser un número o null
console.log(edad); // Imprime: null

// Opcionalidad
interface Persona {
    nombre: string;
    edad?: number; // Edad es opcional
}

let persona1: Persona = {
    nombre: "Juan"
};
console.log(persona1.edad); // Imprime: undefined (la propiedad no existe)

// Manejo de errores
function saludar(nombre: string): string {
    if (nombre) {
        return `Hola, ${nombre}!`;
    } else {
        return "Hola, desconocido!";
    }
}
console.log(saludar(null)); // Imprime: Hola, desconocido!
})();