(()=>{
  
    const nombre = prompt("dime tu nombre");

    function saludar(nombre: string): void {
        console.log("Hola, " + nombre + "!");
    }
    
    saludar("warren"); // Imprime "Hola, Juan!"

})();