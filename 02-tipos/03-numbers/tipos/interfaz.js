"use strict";
// Función que toma un arreglo de héroes y devuelve un número
function countPowers(heroes) {
    let totalPowers = 0;
    for (const hero of heroes) {
        totalPowers += hero.powers.length;
    }
    return totalPowers;
}
