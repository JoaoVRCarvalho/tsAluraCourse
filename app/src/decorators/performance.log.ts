export function logPerformance() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originMethod = descriptor.value;

    descriptor.value = function(...args: Array<any>) {
      const time1 = performance.now();
      const funcReturn = originMethod.apply(this, args);
      const time2 = performance.now();
      console.log(`tempo de execução do método [${propertyKey}] ${(time2 - time1)/1} ms`);
      funcReturn;
    }

    return descriptor;
  }
}