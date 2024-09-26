(()=>{
  // Función anónima que transforma un array de números en un nuevo array con cada número elevado al cuadrado
const elevarAlCuadrado = (numeros: number[]): number[] => {
    // Descripción: Esta función toma un array de números como entrada y devuelve un nuevo array con cada número elevado al cuadrado.
    // Explicación: Utilizamos el método 'map' de los arrays para crear un nuevo array. La función de flecha dentro de 'map' eleva al cuadrado cada elemento del array original.
    return numeros.map(numero => numero * numero);
};

// Uso de la función
const numeros = [1, 2, 3];
const cuadrados = elevarAlCuadrado(numeros);
console.log(cuadrados); // Imprime: [1, 4, 9]
})();