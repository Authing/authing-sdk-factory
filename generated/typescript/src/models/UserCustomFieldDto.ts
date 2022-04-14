/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserCustomFieldDto = {
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 数据类型
     */
    dataType: string;
    /**
     * 字段 key
     */
    key: string;
    /**
     * 描述信息
     */
    label: string;
    /**
     * 枚举值类型选择项
     */
    options: Array<string>;
};
