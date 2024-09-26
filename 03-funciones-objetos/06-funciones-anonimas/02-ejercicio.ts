(()=>{
  // Función anónima que filtra un array de números para obtener solo los pares
const filtrarPares = (numeros: number[]): number[] => {
    // Descripción: Esta función toma un array de números como entrada y devuelve un nuevo array con solo los números pares.
    // Explicación: Utilizamos el método 'filter' de los arrays para crear un nuevo array. La función de flecha dentro de 'filter' verifica si cada elemento es divisible por 2. Si lo es, se incluye en el nuevo array.
    return numeros.filter(numero => numero % 2 === 0);
};

// Uso de la función
const numeros = [1, 2, 3, 4, 5];
const pares = filtrarPares(numeros);
console.log(pares); // Imprime: [2, 4]
})();