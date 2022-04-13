import { Encryption } from '../options/ManagementClientOptions';

export const pickBy = (obj: any, predicate: (value: any, key: string) => boolean) => {
    const ret: any = {};
    for (const key of Object.keys(obj)) {
        if (predicate(obj[key], key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
};

export const encrypt = async (plainText: string, publicKey: string, encryption?: Encryption) => {
    return plainText;
};
