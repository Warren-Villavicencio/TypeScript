(()=>{
    enum DiasSemana {
        Lunes,
        Martes,
        Miércoles,
        Jueves,
        Viernes,
        Sábado,
        Domingo
    }
    
    function obtenerDiasTrabajados(): DiasSemana[] {
        const diasTrabajadosStr = prompt("Ingrese los días que trabaja (separados por coma):");
        const diasTrabajadosArray = diasTrabajadosStr.split(',').map(diaStr => {
            const dia = DiasSemana[diaStr.trim()];
            if (!dia) {
                console.error(`Día inválido: ${diaStr}`);
                return undefined;
            }
            return dia;
        }).filter(dia => dia !== undefined) as DiasSemana[];
    
        return diasTrabajadosArray;
    }
    
    const diasQueTrabaja = obtenerDiasTrabajados();
    console.log("Días que trabaja:", diasQueTrabaja);
})();