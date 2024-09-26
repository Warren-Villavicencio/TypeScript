(()=>{
    function saludar(nombre: string, mensaje: string = 'Hola') {
        // Si no se proporciona un mensaje, se utiliza 'Hola' por defecto.
        console.log(`${mensaje}, ${nombre}!`);
      }
      
      saludar('Juan'); // Imprime: Hola, Juan!
      saludar('Ana', '¡Buenos días!'); // Imprime: ¡Buenos días!, Ana!
})();