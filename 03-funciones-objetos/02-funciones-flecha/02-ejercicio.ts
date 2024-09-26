(()=>{
  // PrimerosNNumeros.ts
const primerosN = (n: number): number[] => {
    // Función flecha que crea un arreglo con los primeros 'n' números naturales.
    // Utiliza un arreglo vacío y el método 'fill' para inicializarlo con 'n' elementos.
    // Luego, se utiliza 'map' para transformar cada elemento en su índice + 1.
    return Array(n).fill(0).map((_, i) => i + 1);
};
})();