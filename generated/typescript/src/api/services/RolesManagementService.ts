/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignRoleBatchDto } from '../models/AssignRoleBatchDto';
import type { AssignRoleDto } from '../models/AssignRoleDto';
import type { CommonResponseDto } from '../models/CommonResponseDto';
import type { CreateRoleDto } from '../models/CreateRoleDto';
import type { CreateRolesBatch } from '../models/CreateRolesBatch';
import type { DeleteRoleDto } from '../models/DeleteRoleDto';
import type { GetRoleDto } from '../models/GetRoleDto';
import type { ListRoleDepartmentDto } from '../models/ListRoleDepartmentDto';
import type { ListRoleDto } from '../models/ListRoleDto';
import type { ListRoleMemberDto } from '../models/ListRoleMemberDto';
import type { RevokeRoleBatchDto } from '../models/RevokeRoleBatchDto';
import type { RevokeRoleDto } from '../models/RevokeRoleDto';
import type { RoleAuthorizedResourcesDto } from '../models/RoleAuthorizedResourcesDto';
import type { UpdateRoleDto } from '../models/UpdateRoleDto';

import { ManagementClientOptions } from '../../options/ManagementClientOptions';
import { HttpClient } from '../../client/HttpClient';


export class RolesManagementService {
    httpClient: HttpClient;
    constructor(options: ManagementClientOptions) {
        this.httpClient = new HttpClient(options)
    }

    /**
     * @summary 获取角色详情
     * @description 获取角色详情
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getRole(
        requestBody: GetRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async assignRole(
        requestBody: AssignRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/assign-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async assignRoleBatch(
        requestBody: AssignRoleBatchDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/assign-role-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async revokeRole(
        requestBody: RevokeRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/revoke-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async revokeRoleBatch(
        requestBody: RevokeRoleBatchDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/revoke-role-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 角色被授权的资源列表
     * @description 角色被授权的资源列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getRoleAuthorizedResources(
        requestBody: RoleAuthorizedResourcesDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-role-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色成员列表
     * @description 获取角色成员列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listUsers(
        requestBody: ListRoleMemberDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-role-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色的部门列表
     * @description 获取角色的部门列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listDepartments(
        requestBody: ListRoleDepartmentDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-role-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建角色
     * @description 创建角色
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createRole(
        requestBody: CreateRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色列表
     * @description 获取角色列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listRoles(
        requestBody: ListRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除角色
     * @description 删除角色
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async deleteRoles(
        requestBody: DeleteRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建角色
     * @description 批量创建角色
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createRolesBatch(
        requestBody: CreateRolesBatch,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-roles-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改角色
     * @description 修改角色
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async updateRole(
        requestBody: UpdateRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}