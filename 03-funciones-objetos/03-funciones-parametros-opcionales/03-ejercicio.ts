(()=>{
    function generarMensaje(mensaje: string, destinatario: string, asunto?: string): string {
        // Genera un mensaje de correo electrónico.
        // El asunto es opcional.
        if (asunto) {
          return `Para: ${destinatario}\nAsunto: ${asunto}\n\n${mensaje}`;
        } else {
          return `Para: ${destinatario}\n\n${mensaje}`;
        }
      }
})();