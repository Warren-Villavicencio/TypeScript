(()=>{
  // Función que siempre lanza una excepción
function error(message: string): never {
    throw new Error(message);
}

// Bucle infinito
function infiniteLoop(): never {
    while (true) {}
}

// Unión de tipos exhaustiva
type Animal = 'dog' | 'cat' | 'fish';

function getAnimalSound(animal: Animal): string {
    switch (animal) {
        case 'dog':
            return 'Woof!';
        case 'cat':
            return 'Meow!';
        case 'fish':
            return 'Blub!';
        default:
            // Este caso nunca se ejecutará porque ya hemos cubierto todos los casos posibles
            return error('Animal desconocido');
    }
}
})();