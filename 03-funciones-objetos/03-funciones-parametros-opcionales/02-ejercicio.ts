(()=>{
    function crearUsuario(nombre: string, edad: number, correoElectronico?: string): { nombre: string, edad: number, correoElectronico?: string } {
        // Crea un objeto de usuario con las propiedades proporcionadas.
        // El correo electrónico es opcional.
        return { nombre, edad, correoElectronico };
      }
})();