(()=>{
  // Función anónima que suma dos números
const sumar = (a: number, b: number): number => {
    // Descripción: Esta función toma dos números como entrada y devuelve su suma.
    // Explicación: Utilizamos la sintaxis de flecha para definir una función anónima. Los parámetros 'a' y 'b' son de tipo número. El cuerpo de la función simplemente devuelve la suma de 'a' y 'b'.
    return a + b;
};

// Uso de la función
const resultado = sumar(5, 3);
console.log(resultado); // Imprime: 8
})();