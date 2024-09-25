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
    function esFinDeSemana(dia) {
        return dia === DiasSemana.Sábado || dia === DiasSemana.Domingo;
    }
    let hoy = DiasSemana.Miércoles;
    console.log(esFinDeSemana(hoy)); // Imprimirá false
})();
