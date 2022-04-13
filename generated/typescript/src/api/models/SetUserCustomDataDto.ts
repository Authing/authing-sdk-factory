/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetUserCustomDataDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 自定义字段数据，为 kv 的对象类型，value 的类型需要符合定义的类型
     */
    customData: any;
};
