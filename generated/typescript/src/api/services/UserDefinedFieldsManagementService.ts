/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponseDto } from '../models/CommonResponseDto';
import type { GetUserDefinedFieldsDto } from '../models/GetUserDefinedFieldsDto';

import { ManagementClientOptions } from '../../options/ManagementClientOptions';
import { HttpClient } from '../../client/HttpClient';


export class UserDefinedFieldsManagementService {
    httpClient: HttpClient;
    constructor(options: ManagementClientOptions) {
        this.httpClient = new HttpClient(options)
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