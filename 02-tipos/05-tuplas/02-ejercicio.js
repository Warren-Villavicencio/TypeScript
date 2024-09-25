"use strict";
(() => {
    // Solicitar al usuario el número de estudiantes
    const numEstudiantesStr = prompt("Ingrese la cantidad de estudiantes:");
    const numEstudiantes = parseInt(numEstudiantesStr || "0"); // Asigna 0 si el usuario cancela
    // Crear un array vacío para almacenar los datos
    const lista_estudiantes = [];
    // Iterar para solicitar los datos de cada estudiante
    for (let i = 0; i < numEstudiantes; i++) {
        const matriculaStr = prompt("Ingrese la matrícula del estudiante " + (i + 1) + ":");
        const matricula = parseInt(matriculaStr || "0");
        const nombre = prompt("Ingrese el nombre del estudiante " + (i + 1) + ":");
        const apellido = prompt("Ingrese el apellido del estudiante " + (i + 1) + ":");
        // Agregar los datos al array
        lista_estudiantes.push({ matricula, nombre, apellido });
    }
    // Mostrar la lista de estudiantes por consola
    console.log(lista_estudiantes);
})();
