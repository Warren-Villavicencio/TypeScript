(()=>{
    function sumarNumeros(...numeros: number[]): number {
        // Suma todos los números proporcionados como argumentos.
        // Utiliza el operador rest (...) para aceptar un número variable de argumentos.
        return numeros.reduce((total, numero) => total + numero, 0);
      }
})();