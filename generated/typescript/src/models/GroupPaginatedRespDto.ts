/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupPagingDto } from './GroupPagingDto';

export type GroupPaginatedRespDto = {
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
    data: GroupPagingDto;
};
