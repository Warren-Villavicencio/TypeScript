enum DiasSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

function obtenerDiasTrabajados(): (DiasSemana | undefined)[] {
    const diasTrabajadosStr = prompt("Ingrese los días que trabaja (separados por coma):");

    if (!diasTrabajadosStr) {
        return [];
    }

    const diasTrabajadosArray = diasTrabajadosStr.split(',')
        .map(diaStr => {
            const diaIndex = parseInt(diaStr.trim());
            const dia = DiasSemana[diaIndex];
            return dia;
        })
        .filter(dia => dia !== undefined) as (DiasSemana | undefined)[];

    return diasTrabajadosArray;
}