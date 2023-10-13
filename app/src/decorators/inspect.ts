export function inspect() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originMethod = descriptor.value;

    descriptor.value = function(...args:Array<any>) {
      console.log(`method: ${propertyKey}`);
      console.log(`params: ${JSON.stringify(args)}`);
      const fnReturn = originMethod.apply(this);
      console.log(`return from ${propertyKey}: ${fnReturn}`)
      return fnReturn;
    }

    return descriptor;
  }
}