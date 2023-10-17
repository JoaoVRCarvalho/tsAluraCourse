export function escape(target, propertyKey, descriptor) {
    const originFn = descriptor.value;
    descriptor.value = function (...args) {
        let fnReturn = originFn.apply(this, args);
        if (typeof fnReturn === 'string') {
            fnReturn = fnReturn
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return fnReturn;
    };
    return descriptor;
}
