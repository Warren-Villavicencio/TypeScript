let superheroes: number = 10;
let villains: number = 20;

function compareHeroesAndVillains(heroes: number, villains: number): string {
  if (heroes < villains) {
    return "Perdimos la batalla.";
  } else {
    return "Ganamos la batalla!";
  }
}