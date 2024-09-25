enum DiasSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

function esFinDeSemana(dia: DiasSemana): boolean {
    return dia === DiasSemana.Sábado || dia === DiasSemana.Domingo;
}

let hoy: DiasSemana = DiasSemana.Miércoles;
console.log(esFinDeSemana(hoy)); // Imprimirá false