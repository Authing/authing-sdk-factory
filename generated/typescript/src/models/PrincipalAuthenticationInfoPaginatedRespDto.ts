/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrincipalAuthenticationInfoPagingDto } from './PrincipalAuthenticationInfoPagingDto';

export type PrincipalAuthenticationInfoPaginatedRespDto = {
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
    data: PrincipalAuthenticationInfoPagingDto;
};
