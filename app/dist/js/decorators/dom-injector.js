export function domInjector(seletor) {
    return function (target, propertyKey) {
        let element;
        const getter = function () {
            if (!element) {
                console.log('buscando elemento');
                element = document.querySelector(seletor);
                console.log(`element: ${element} injected at ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
