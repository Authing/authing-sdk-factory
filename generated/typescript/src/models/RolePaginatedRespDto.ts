/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePagingDto } from './RolePagingDto';

export type RolePaginatedRespDto = {
    /**
     * 业务状态码，200 表示成功
     */
    code: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 数据
     */
    data: RolePagingDto;
};
