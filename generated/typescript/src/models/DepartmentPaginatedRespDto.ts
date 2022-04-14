/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentPagingDto } from './DepartmentPagingDto';

export type DepartmentPaginatedRespDto = {
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
    data: DepartmentPagingDto;
};
