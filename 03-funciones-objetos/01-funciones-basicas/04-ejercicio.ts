(()=>{
  // Factorial.ts
function factorial(n: number): number {
    // Esta función calcula el factorial de un número.
    // Recibe un número entero positivo.
    // Devuelve el factorial de ese número.
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
})();