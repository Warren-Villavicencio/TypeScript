"use strict";
(() => {
    let DiasSemana;
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
        const diasTrabajadosArray = diasTrabajadosStr.split(',').map(diaStr => {
            const dia = DiasSemana[diaStr.trim()];
            if (!dia) {
                console.error(`Día inválido: ${diaStr}`);
                return undefined;
            }
            return dia;
        }).filter(dia => dia !== undefined);
        return diasTrabajadosArray;
    }
    const diasQueTrabaja = obtenerDiasTrabajados();
    console.log("Días que trabaja:", diasQueTrabaja);
})();
