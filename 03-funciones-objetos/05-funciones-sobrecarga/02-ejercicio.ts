(()=>{
  // crearElementoHTML.ts
function crearElementoHTML(tagName: string, attributes?: { [key: string]: string }): HTMLElement;
function crearElementoHTML(tagName: string, textContent: string): HTMLElement;
function crearElementoHTML(tagName: string, ...args: any[]): HTMLElement {
  const element = document.createElement(tagName);
  if (typeof args[0] === 'object') {
    for (const key in args[0]) {
      element.setAttribute(key, args[0][key]);
    }
  } else if (typeof args[0] === 'string') {
    element.textContent = args[0];
  }
  return element;
}

const divConId = crearElementoHTML('div', { id: 'myDiv' });
const parrafoConTexto = crearElementoHTML('p', 'Hola, mundo!');
})();