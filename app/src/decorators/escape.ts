export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originFn = descriptor.value;

  descriptor.value = function(...args: Array<any>) {
    let fnReturn = originFn.apply(this, args);
    if (typeof fnReturn === 'string') {
      // console.log('escaping...');
      fnReturn = fnReturn
        .replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return fnReturn;
  }

  return descriptor;
}