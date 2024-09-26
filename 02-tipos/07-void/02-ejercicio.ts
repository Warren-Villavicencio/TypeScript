(()=>{
  
})();

// Función que modifica una variable global
let contador: number = 0;

function incrementarContador(): void {
    contador++;
}

incrementarContador(); // Ahora contador tiene el valor 1

// Función que realiza una llamada a una API (simulada)
function enviarDatos(datos: any): void {
    console.log("Enviando datos:", datos);
    // Aquí se realizaría la llamada real a la API
}

enviarDatos({ nombre: "Juan", edad: 30 });