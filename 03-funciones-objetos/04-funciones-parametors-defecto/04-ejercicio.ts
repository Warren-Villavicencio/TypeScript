(()=>{
    function sumar(...numeros: number[]): number {
        // Suma todos los números proporcionados.
        return numeros.reduce((total, numero) => total + numero, 0);
      }
      
      let resultado1 = sumar(1, 2, 3); // Imprime: 6
      let resultado2 = sumar(10, 20); // Imprime: 30
})();