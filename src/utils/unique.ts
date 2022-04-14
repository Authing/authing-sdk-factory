export const unique = <T>(val: T, index: number, arr: T[]): boolean => {
    return arr.indexOf(val) === index;
};

export const removeDuplicates = (arr: string[]): string[] => {
    arr = arr.map(x => x?.toString());
    return Array.from(new Set(arr));
};
