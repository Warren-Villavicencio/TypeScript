(()=>{
  // NumerosACadena.ts
const numerosACadena = (numeros: number[]): string => {
    // Función flecha que convierte un arreglo de números en una cadena separada por comas.
    // Utiliza el método 'join' para unir los elementos del arreglo en una cadena.
    return numeros.join(', ');
};
})();