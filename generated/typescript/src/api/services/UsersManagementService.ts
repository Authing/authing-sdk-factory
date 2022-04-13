/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponseDto } from '../models/CommonResponseDto';
import type { CreateUserBatchReqDto } from '../models/CreateUserBatchReqDto';
import type { CreateUserReqDto } from '../models/CreateUserReqDto';
import type { DeleteUserBatchDto } from '../models/DeleteUserBatchDto';
import type { GetUserAccessibleAppsReqDto } from '../models/GetUserAccessibleAppsReqDto';
import type { GetUserAuthorizedResourcesDto } from '../models/GetUserAuthorizedResourcesDto';
import type { GetUserBatchDto } from '../models/GetUserBatchDto';
import type { GetUserCustomDataDto } from '../models/GetUserCustomDataDto';
import type { GetUserDepartmentsDto } from '../models/GetUserDepartmentsDto';
import type { GetUserDto } from '../models/GetUserDto';
import type { GetUserGroupsDto } from '../models/GetUserGroupsDto';
import type { GetUserIdentitiesDto } from '../models/GetUserIdentitiesDto';
import type { GetUserLoggedInAppsReqDto } from '../models/GetUserLoggedInAppsReqDto';
import type { GetUserLoginHistoryDto } from '../models/GetUserLoginHistoryDto';
import type { GetUserMfaInfoDto } from '../models/GetUserMfaInfoDto';
import type { GetUserPrincipalAuthenticationInfoDto } from '../models/GetUserPrincipalAuthenticationInfoDto';
import type { GetUserRolesDto } from '../models/GetUserRolesDto';
import type { HasAnyRoleDto } from '../models/HasAnyRoleDto';
import type { IsUserExistsReqDto } from '../models/IsUserExistsReqDto';
import type { KickUsersDto } from '../models/KickUsersDto';
import type { ListArchivedUsersDto } from '../models/ListArchivedUsersDto';
import type { ListUsersDto } from '../models/ListUsersDto';
import type { ResetUserPrincipalAuthenticationInfoDto } from '../models/ResetUserPrincipalAuthenticationInfoDto';
import type { SetUserCustomDataDto } from '../models/SetUserCustomDataDto';
import type { SetUserDepartmentsDto } from '../models/SetUserDepartmentsDto';
import type { UpdateUserReqDto } from '../models/UpdateUserReqDto';

import { ManagementClientOptions } from '../../options/ManagementClientOptions';
import { HttpClient } from '../../client/HttpClient';


export class UsersManagementService {
    httpClient: HttpClient;
    constructor(options: ManagementClientOptions) {
        this.httpClient = new HttpClient(options)
    }

    /**
     * @summary 获取用户信息
     * @description 获取用户信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUser(
        requestBody: GetUserDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量获取用户信息
     * @description 根据用户 id 批量获取用户信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserBatch(
        requestBody: GetUserBatchDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户列表
     * @description 获取用户列表接口，支持分页
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listUsers(
        requestBody: ListUsersDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户的外部身份源
     * @description 获取用户的外部身份源
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserIdentities(
        requestBody: GetUserIdentitiesDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-identities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户自定义数据
     * @description 获取用户自定义数据
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserCustomData(
        requestBody: GetUserCustomDataDto,
    ): Promise<any> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-custom-data',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 设置用户自定义数据
     * @description 设置用户自定义数据
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async setUserCustomData(
        requestBody: SetUserCustomDataDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/set-user-custom-data',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户角色列表
     * @description 获取用户角色列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserRoles(
        requestBody: GetUserRolesDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户实名认证信息
     * @description 获取用户实名认证信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getPrincipalAuthenticationInfo(
        requestBody: GetUserPrincipalAuthenticationInfoDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-principal-authentication-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除用户实名认证信息
     * @description 删除用户实名认证信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async resetPrincipalAuthenticationInfo(
        requestBody: ResetUserPrincipalAuthenticationInfoDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/reset-user-principal-authentication-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户部门列表
     * @description 获取用户部门列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserDepartments(
        requestBody: GetUserDepartmentsDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 设置用户所在部门
     * @description 设置用户所在部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async setUserDepartment(
        requestBody: SetUserDepartmentsDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/set-user-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户分组列表
     * @description 获取用户分组列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserGroups(
        requestBody: GetUserGroupsDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除用户
     * @description 删除用户（支持批量删除）
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async deleteUserBatch(
        requestBody: DeleteUserBatchDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-user-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户 MFA 绑定信息
     * @description 获取用户 MFA 绑定信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserMfaInfo(
        requestBody: GetUserMfaInfoDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-mfa-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取已归档的用户列表
     * @description 获取已归档的用户列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listArchivedUsers(
        requestBody: ListArchivedUsersDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-archived-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 强制下线用户
     * @description 强制下线用户
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async kickUsers(
        requestBody: KickUsersDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/kick-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 判断用户是否存在
     * @description 根据条件判断用户是否存在
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async isUserExists(
        requestBody: IsUserExistsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/is-user-exists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建用户
     * @description 创建用户
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createUser(
        requestBody: CreateUserReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建用户
     * @description 批量创建用户
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createUserBatch(
        requestBody: CreateUserBatchReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-users-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改用户资料
     * @description 修改用户资料
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async updateUser(
        requestBody: UpdateUserReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户可访问应用
     * @description 获取用户可访问应用
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserAccessibleApps(
        requestBody: GetUserAccessibleAppsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-accessible-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户授权的应用
     * @description 获取用户授权的应用
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserAuthorizedApps(
        requestBody: GetUserAccessibleAppsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-authorized-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 判断用户是否有某个角色
     * @description 判断用户是否有某个角色，支持同时传入多个角色进行判断
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async hasAnyRole(
        requestBody: HasAnyRoleDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/has-any-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户的登录历史记录
     * @description 获取用户登录历史记录
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserLoginHistory(
        requestBody: GetUserLoginHistoryDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-login-history',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户曾经登录过的应用
     * @description 获取用户曾经登录过的应用
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserLoggedInApps(
        requestBody: GetUserLoggedInAppsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-loggedin-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户被授权的所有资源，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合
     * @description 获取用户被授权的所有资源
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserAuthorizedResources(
        requestBody: GetUserAuthorizedResourcesDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}