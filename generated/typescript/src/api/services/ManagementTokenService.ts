/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponseDto } from '../models/CommonResponseDto';
import type { GetManagementAccessTokenDto } from '../models/GetManagementAccessTokenDto';

import { ManagementClientOptions } from '../../options/ManagementClientOptions';
import { HttpClient } from '../../client/HttpClient';


export class ManagementTokenService {
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

}