export function logPerformance() {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            const time1 = performance.now();
            const funcReturn = originMethod.apply(this, args);
            const time2 = performance.now();
            funcReturn;
        };
        return descriptor;
    };
}
