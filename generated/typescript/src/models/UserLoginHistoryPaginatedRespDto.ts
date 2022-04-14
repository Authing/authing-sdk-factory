/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserLoginHistoryPagingDto } from './UserLoginHistoryPagingDto';

export type UserLoginHistoryPaginatedRespDto = {
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
    data: UserLoginHistoryPagingDto;
};
