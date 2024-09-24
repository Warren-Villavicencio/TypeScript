"use strict";
const miModulo = (function () {
    let variablePrivada = "Soy privada";
    function funcionPrivada() {
        console.log("Función privada");
    }
    return {
        variablePublica: "Soy pública",
        funcionPublica: function () {
            console.log("Función pública");
            funcionPrivada();
        }
    };
})();
miModulo.funcionPublica(); // Llama a la función pública
console.log(miModulo.variablePublica); // Acceder a la variable pública
// No podemos acceder a variablePrivada ni a funcionPrivada desde fuera
