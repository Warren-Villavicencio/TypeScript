"use strict";
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
function obtenerDiasTrabajados() {
    const diasTrabajadosStr = prompt("Ingrese los días que trabaja (separados por coma):");
    if (!diasTrabajadosStr) {
        return [];
    }
    const diasTrabajadosArray = diasTrabajadosStr.split(',')
        .map(diaStr => {
        const diaStrLimpio = diaStr.trim().toLowerCase(); // Convertir a minúsculas para una comparación más flexible
        const diaIndex = DiasSemana[diaStrLimpio]; // Usar keyof para una asignación segura
        if (diaIndex === undefined) {
            console.error(`Día inválido: ${diaStr}`);
            return undefined;
        }
        return diaIndex;
    })
        .filter(dia => dia !== undefined);
    return diasTrabajadosArray;
}
