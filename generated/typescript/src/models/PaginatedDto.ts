/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginatedDataDto } from './PaginatedDataDto';

export type PaginatedDto = {
    /**
     * 业务状态码，200 表示成功
     */
    code: number;
    /**
     * 描述信息
     */
    message?: string;
    /**
     * 分页结果
     */
    data: PaginatedDataDto;
};
