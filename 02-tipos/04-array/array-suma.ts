(()=> {

    // Creamos un array de números
const numbers: number[] = [1, 2, 3, 4, 5];

// Usamos el método reduce para sumar todos los elementos del array
const sum = numbers.reduce((accumulator, currentValue) => {
    // En cada iteración, sumamos el valor actual al acumulador
    return accumulator + currentValue;
}, 0); // El valor inicial del acumulador es 0

console.log('La suma total es:', sum);

})()