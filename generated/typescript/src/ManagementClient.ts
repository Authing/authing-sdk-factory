/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponseDto } from './models/CommonResponseDto';
import type { GetManagementAccessTokenDto } from './models/GetManagementAccessTokenDto';
import type { CreateUserBatchReqDto } from './models/CreateUserBatchReqDto';
import type { CreateUserReqDto } from './models/CreateUserReqDto';
import type { DeleteUsersBatchDto } from './models/DeleteUsersBatchDto';
import type { GetUserAccessibleAppsReqDto } from './models/GetUserAccessibleAppsReqDto';
import type { GetUserAuthorizedResourcesDto } from './models/GetUserAuthorizedResourcesDto';
import type { GetUserBatchDto } from './models/GetUserBatchDto';
import type { GetUserCustomDataDto } from './models/GetUserCustomDataDto';
import type { GetUserDepartmentsDto } from './models/GetUserDepartmentsDto';
import type { GetUserDto } from './models/GetUserDto';
import type { GetUserGroupsDto } from './models/GetUserGroupsDto';
import type { GetUserIdentitiesDto } from './models/GetUserIdentitiesDto';
import type { GetUserLoggedInAppsReqDto } from './models/GetUserLoggedInAppsReqDto';
import type { GetUserLoginHistoryDto } from './models/GetUserLoginHistoryDto';
import type { GetUserMfaInfoDto } from './models/GetUserMfaInfoDto';
import type { GetUserPrincipalAuthenticationInfoDto } from './models/GetUserPrincipalAuthenticationInfoDto';
import type { GetUserRolesDto } from './models/GetUserRolesDto';
import type { HasAnyRoleDto } from './models/HasAnyRoleDto';
import type { IsUserExistsReqDto } from './models/IsUserExistsReqDto';
import type { KickUsersDto } from './models/KickUsersDto';
import type { ListArchivedUsersDto } from './models/ListArchivedUsersDto';
import type { ListUsersDto } from './models/ListUsersDto';
import type { ResetUserPrincipalAuthenticationInfoDto } from './models/ResetUserPrincipalAuthenticationInfoDto';
import type { SetUserCustomDataDto } from './models/SetUserCustomDataDto';
import type { SetUserDepartmentsDto } from './models/SetUserDepartmentsDto';
import type { UpdateUserReqDto } from './models/UpdateUserReqDto';
import type { AddGroupMembersReqDto } from './models/AddGroupMembersReqDto';
import type { CreateGroupBatchReqDto } from './models/CreateGroupBatchReqDto';
import type { CreateGroupReqDto } from './models/CreateGroupReqDto';
import type { DeleteGroupsReqDto } from './models/DeleteGroupsReqDto';
import type { GetGroupAuthorizedResourcesDto } from './models/GetGroupAuthorizedResourcesDto';
import type { GetGroupDto } from './models/GetGroupDto';
import type { ListGroupMembersDto } from './models/ListGroupMembersDto';
import type { ListGroupsDto } from './models/ListGroupsDto';
import type { RemoveGroupMembersReqDto } from './models/RemoveGroupMembersReqDto';
import type { UpdateGroupReqDto } from './models/UpdateGroupReqDto';
import type { AssignRoleBatchDto } from './models/AssignRoleBatchDto';
import type { AssignRoleDto } from './models/AssignRoleDto';
import type { CreateRoleDto } from './models/CreateRoleDto';
import type { CreateRolesBatch } from './models/CreateRolesBatch';
import type { DeleteRoleDto } from './models/DeleteRoleDto';
import type { GetRoleDto } from './models/GetRoleDto';
import type { ListRoleDepartmentDto } from './models/ListRoleDepartmentDto';
import type { ListRoleDto } from './models/ListRoleDto';
import type { ListRoleMemberDto } from './models/ListRoleMemberDto';
import type { RevokeRoleBatchDto } from './models/RevokeRoleBatchDto';
import type { RevokeRoleDto } from './models/RevokeRoleDto';
import type { RoleAuthorizedResourcesDto } from './models/RoleAuthorizedResourcesDto';
import type { UpdateRoleDto } from './models/UpdateRoleDto';
import type { AddDepartmentMembersReqDto } from './models/AddDepartmentMembersReqDto';
import type { CreateDepartmentReqDto } from './models/CreateDepartmentReqDto';
import type { CreateOrganizationReqDto } from './models/CreateOrganizationReqDto';
import type { DeleteDepartmentReqDto } from './models/DeleteDepartmentReqDto';
import type { DeleteOrganizationReqDto } from './models/DeleteOrganizationReqDto';
import type { GetDepartmentReqDto } from './models/GetDepartmentReqDto';
import type { GetParentDepartmentReqDto } from './models/GetParentDepartmentReqDto';
import type { ListChildrenDepartmentsReqDto } from './models/ListChildrenDepartmentsReqDto';
import type { ListDepartmentMembersReqDto } from './models/ListDepartmentMembersReqDto';
import type { ListOrganizationsReqDto } from './models/ListOrganizationsReqDto';
import type { SearchDepartmentsReqDto } from './models/SearchDepartmentsReqDto';
import type { UpdateDepartmentReqDto } from './models/UpdateDepartmentReqDto';
import type { UpdateOrganizationReqDto } from './models/UpdateOrganizationReqDto';
import type { GetUserDefinedFieldsDto } from './models/GetUserDefinedFieldsDto';

import { ManagementClientOptions } from './ManagementClientOptions';
import { HttpClient } from './HttpClient';


export class ManagementClient {
    httpClient: HttpClient;
    constructor(options: ManagementClientOptions) {
        this.httpClient = new HttpClient(options)
    }

    /**
     * @summary 获取 Management API Token
     * @description 获取 Management API Token
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getManagementToken(
        requestBody: GetManagementAccessTokenDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-management-token',
            body: requestBody,
            mediaType: 'application/json',
        });
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
        requestBody: DeleteUsersBatchDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-users-batch',
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

    /**
     * @summary 获取分组详情
     * @description 通过分组 code 获取分组详情
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getGroup(
        requestBody: GetGroupDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组列表
     * @description 获取分组列表接口，支持分页
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getGroupList(
        requestBody: ListGroupsDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建分组
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createGroup(
        requestBody: CreateGroupReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建分组
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createGroupBatch(
        requestBody: CreateGroupBatchReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-groups-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改分组
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async updateGroup(
        requestBody: UpdateGroupReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除分组
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async deleteGroups(
        requestBody: DeleteGroupsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-groups-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 添加分组成员
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async addGroupMembers(
        requestBody: AddGroupMembersReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/add-group-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 移除分组成员
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async removeGroupMembers(
        requestBody: RemoveGroupMembersReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/remove-group-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组成员列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listGroupMembers(
        requestBody: ListGroupMembersDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-group-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组被授权的资源列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getGroupAuthorizedResources(
        requestBody: GetGroupAuthorizedResourcesDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-group-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
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
    public async listRoleMembers(
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
            url: '/api/v3/list-roles',
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
            url: '/api/v3/delete-roles-batch',
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

    /**
     * @summary 获取顶层组织机构列表
     * @description 获取顶层组织机构列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listOrganizations(
        requestBody: ListOrganizationsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-organizations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建顶层组织机构
     * @description 创建顶层组织机构
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createOrganization(
        requestBody: CreateOrganizationReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-organization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改顶层组织机构
     * @description 修改顶层组织机构
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async updateOrganization(
        requestBody: UpdateOrganizationReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-organization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除顶层组织机构
     * @description 删除顶层组织机构
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async deleteOrganization(
        requestBody: DeleteOrganizationReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-organization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取部门信息
     * @description 获取部门信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getDepartment(
        requestBody: GetDepartmentReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建部门
     * @description 创建部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async createDepartment(
        requestBody: CreateDepartmentReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改部门
     * @description 修改部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async updateDepartment(
        requestBody: UpdateDepartmentReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除部门
     * @description 删除部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async deleteDepartment(
        requestBody: DeleteDepartmentReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 搜索部门
     * @description 搜索部门
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async searchDepartments(
        requestBody: SearchDepartmentsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/search-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取子部门列表
     * @description 获取子部门列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listChildrenDepartments(
        requestBody: ListChildrenDepartmentsReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-children-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取部门直属成员列表
     * @description 获取部门直属成员列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listDepartmentMembers(
        requestBody: ListDepartmentMembersReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-department-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取部门直属成员 ID 列表
     * @description 获取部门直属成员 ID 列表
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async listDepartmentMemberIds(
        requestBody: ListChildrenDepartmentsReqDto,
    ): Promise<any> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-department-member-ids',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 部门下添加成员
     * @description 部门下添加成员
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async addDepartmentMembers(
        requestBody: AddDepartmentMembersReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/add-department-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 部门下删除成员
     * @description 部门下删除成员
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async removeDepartmentMembers(
        requestBody: AddDepartmentMembersReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/remove-department-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取父部门信息
     * @description 获取父部门信息
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getParentDepartment(
        requestBody: GetParentDepartmentReqDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-parent-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户池定义的自定义字段
     * @description 获取用户池定义的自定义字段
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public async getUserCustomFields(
        requestBody: GetUserDefinedFieldsDto,
    ): Promise<CommonResponseDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-defined-fields',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}