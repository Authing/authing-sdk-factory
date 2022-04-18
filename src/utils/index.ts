export const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
