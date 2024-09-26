(()=>{
    function calcularArea(base: number, altura: number = 1) {
        // Si no se proporciona la altura, se asume que es 1.
        return base * altura;
      }
      
      let area1 = calcularArea(5); // Imprime: 5 (base 5, altura 1 por defecto)
      let area2 = calcularArea(3, 4); // Imprime: 12
})();