(()=>{
  
    const nombre = prompt("dime tu nombre");

    function saludar(nombre: string): void {
        console.log("Hola, " + nombre + "!");
    }
    
    saludar("fd"); // Imprime "Hola, Juan!"

})();