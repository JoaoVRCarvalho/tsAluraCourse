export function domInjector(seletor: string) {

  return function(
    target: any,
    propertyKey: string,
  ) {

    let element: HTMLElement;
    const getter = function() {
      if (!element) {
        // console.log('buscando elemento...')
        element = document.querySelector(seletor) as HTMLElement;
        // console.log(`element: ${element} injected at ${propertyKey}`);
      }

      return element;
    }

    Object.defineProperty(
      target, 
      propertyKey, 
      { get: getter }
    )
  }
}