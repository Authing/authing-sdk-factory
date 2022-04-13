/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddDepartmentMembersReqDto } from '../models/AddDepartmentMembersReqDto';
import type { CommonResponseDto } from '../models/CommonResponseDto';
import type { CreateDepartmentReqDto } from '../models/CreateDepartmentReqDto';
import type { CreateOrganizationReqDto } from '../models/CreateOrganizationReqDto';
import type { DeleteDepartmentReqDto } from '../models/DeleteDepartmentReqDto';
import type { DeleteOrganizationReqDto } from '../models/DeleteOrganizationReqDto';
import type { GetDepartmentReqDto } from '../models/GetDepartmentReqDto';
import type { GetParentDepartmentReqDto } from '../models/GetParentDepartmentReqDto';
import type { ListChildrenDepartmentsReqDto } from '../models/ListChildrenDepartmentsReqDto';
import type { ListDepartmentMembersReqDto } from '../models/ListDepartmentMembersReqDto';
import type { ListOrganizationsReqDto } from '../models/ListOrganizationsReqDto';
import type { SearchDepartmentsReqDto } from '../models/SearchDepartmentsReqDto';
import type { UpdateDepartmentReqDto } from '../models/UpdateDepartmentReqDto';
import type { UpdateOrganizationReqDto } from '../models/UpdateOrganizationReqDto';

import { ManagementClientOptions } from '../../options/ManagementClientOptions';
import { HttpClient } from '../../client/HttpClient';


export class OrganizationsManagementService {
    httpClient: HttpClient;
    constructor(options: ManagementClientOptions) {
        this.httpClient = new HttpClient(options)
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

}