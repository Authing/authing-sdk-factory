/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HasRoleRolesDto } from './HasRoleRolesDto';

export type HasAnyRoleDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 角色列表
     */
    roles: Array<HasRoleRolesDto>;
};
