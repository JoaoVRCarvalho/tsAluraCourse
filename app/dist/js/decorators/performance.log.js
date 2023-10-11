export function logPerformance() {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            const time1 = performance.now();
            const funcReturn = originMethod.apply(this, args);
            const time2 = performance.now();
            console.log(`tempo de execução do método [${propertyKey}] ${(time2 - time1) / 1000} segundos`);
            funcReturn;
        };
        return descriptor;
    };
}
