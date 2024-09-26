"use strict";
(() => {
    // Función que siempre lanza una excepción
    function error(message) {
        throw new Error(message);
    }
    // Bucle infinito
    function infiniteLoop() {
        while (true) { }
    }
    function getAnimalSound(animal) {
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
