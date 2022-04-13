/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserRolesOptionsDto } from './GetUserRolesOptionsDto';

export type GetUserRolesDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: GetUserRolesOptionsDto;
};
