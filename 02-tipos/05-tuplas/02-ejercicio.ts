interface Estudiante {
    matricula: number;
    nombre: string;
    apellido: string;
}

(()=>{
    // Solicitar al usuario el número de estudiantes
    const numEstudiantes: number = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

    // Crear un array vacío para almacenar los datos
    const lista_estudiantes: Estudiante[] = [];

    // Iterar para solicitar los datos de cada estudiante
    for (let i = 0; i < numEstudiantes; i++) {
        const matricula: number = parseInt(prompt("Ingrese la matrícula del estudiante " + (i+1) + ":"));
        const nombre: string = prompt("Ingrese el nombre del estudiante " + (i+1) + ":");
        const apellido: string = prompt("Ingrese el apellido del estudiante " + (i+1) + ":");

        // Agregar los datos al array
        lista_estudiantes.push({ matricula, nombre, apellido });
    }

    // Mostrar la lista de estudiantes por consola
    console.log(lista_estudiantes);
})();