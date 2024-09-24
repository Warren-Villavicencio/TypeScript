// Define una interfaz para representar a un héroe
interface Hero {
    name: string;
    powers: string[];
  }
  
  // Función que toma un arreglo de héroes y devuelve un número
  function countPowers(heroes: Hero[]): number {
    let totalPowers = 0;
    for (const hero of heroes) {
      totalPowers += hero.powers.length;
    }
    return totalPowers;
  }