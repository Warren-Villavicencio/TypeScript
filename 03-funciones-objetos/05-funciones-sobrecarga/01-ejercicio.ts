(()=>{
  // sumaNumerosOConcatenarCadenas.ts
function sumaNumerosOConcatenarCadenas(a: number, b: number): number;
function sumaNumerosOConcatenarCadenas(a: string, b: string): string;
function sumaNumerosOConcatenarCadenas(a: any, b: any): any {
  // Implementación por defecto (puede ser más específica si es necesario)
  return a + b;
}

const resultado1 = sumaNumerosOConcatenarCadenas(1, 2); // Resultado: 3
const resultado2 = sumaNumerosOConcatenarCadenas("Hola", " Mundo"); // Resultado: "Hola Mundo"
})();