(()=>{
  // Función anónima que crea un objeto con propiedades basadas en un valor de entrada
const crearPersona = (nombre: string): { nombre: string, edad: number } => {
    // Descripción: Esta función toma un nombre como entrada y devuelve un objeto con las propiedades 'nombre' y 'edad'. La edad se inicializa en 30.
    // Explicación: Creamos un objeto con las propiedades deseadas y lo retornamos. La edad se asigna a un valor fijo en este ejemplo, pero podría calcularse de otra manera.
    return { nombre, edad: 30 };
};

// Uso de la función
const persona = crearPersona("Juan");
console.log(persona); // Imprime: { nombre: 'Juan', edad: 30 }
})();