/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserLoggedInAppsDto } from './UserLoggedInAppsDto';

export type UserLoggedInAppsListRespDto = {
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
    data: Array<UserLoggedInAppsDto>;
};
