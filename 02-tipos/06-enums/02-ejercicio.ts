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
    
        if (!diasTrabajadosStr) {
            return [];
        }
    
        const diasTrabajadosArray = diasTrabajadosStr.split(',')
            .map(diaStr => {
                const diaStrLimpio = diaStr.trim().toLowerCase(); // Convertir a minúsculas para una comparación más flexible
                const diaIndex = DiasSemana[diaStrLimpio as keyof typeof DiasSemana]; // Usar keyof para una asignación segura
    
                if (diaIndex === undefined) {
                    console.error(`Día inválido: ${diaStr}`);
                    return undefined;
                }
    
                return diaIndex as DiasSemana;
            })
            .filter(dia => dia !== undefined) as DiasSemana[];
    
        return diasTrabajadosArray;
    }
})();