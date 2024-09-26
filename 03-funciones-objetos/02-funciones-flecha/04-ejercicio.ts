(()=>{
  // SumarElementos.ts
const sumarElementos = (numeros: number[]): number => {
    // Función flecha que suma todos los elementos de un arreglo.
    // Utiliza el método 'reduce' para reducir el arreglo a un solo valor.
    return numeros.reduce((total, numero) => total + numero, 0);
};
})();