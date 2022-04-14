/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IsSuccessDto } from './IsSuccessDto';

export type IsSuccessRespDto = {
    /**
     * 业务状态码，200 表示成功
     */
    code: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 操作是否成功
     */
    data: IsSuccessDto;
};
