/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddGroupMembersReqDto } from '../models/AddGroupMembersReqDto';
import type { CommonResponseDto } from '../models/CommonResponseDto';
import type { CreateGroupBatchReqDto } from '../models/CreateGroupBatchReqDto';
import type { CreateGroupReqDto } from '../models/CreateGroupReqDto';
import type { DeleteGroupsReqDto } from '../models/DeleteGroupsReqDto';
import type { GetGroupAuthorizedResourcesDto } from '../models/GetGroupAuthorizedResourcesDto';
import type { GetGroupDto } from '../models/GetGroupDto';
import type { ListGroupMembersDto } from '../models/ListGroupMembersDto';
import type { ListGroupsDto } from '../models/ListGroupsDto';
import type { RemoveGroupMembersReqDto } from '../models/RemoveGroupMembersReqDto';
import type { UpdateGroupReqDto } from '../models/UpdateGroupReqDto';

import { ManagementClientOptions } from '../../options/ManagementClientOptions';
import { HttpClient } from '../../client/HttpClient';


export class GroupsManagementService {
    httpClient: HttpClient;
    constructor(options: ManagementClientOptions) {
        this.httpClient = new HttpClient(options)
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
            url: '/api/v3/delete-groups',
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

}