export function camelize(str: string) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
}

export function camelizeAndFirstCharUpperCase(str: string) {
    str = camelize(str);
    const chars = [...str];
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
}
