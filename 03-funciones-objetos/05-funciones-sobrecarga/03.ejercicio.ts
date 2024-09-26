(()=>{
  // loggearMensaje.ts
function loggearMensaje(message: string, level?: 'info' | 'warn' | 'error'): void;
function loggearMensaje(message: string, ...args: any[]): void {
  const prefix = level ? `[${level.toUpperCase()}]` : '';
  console.log(`${prefix} ${message}`, ...args);
}

loggearMensaje('Operación exitosa', 'info');
loggearMensaje('Error inesperado', 'error', new Error('Algo salió mal'));
})();