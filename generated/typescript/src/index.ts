import Axios from 'axios';

import { UsersManagementService } from './api/services/UsersManagementService';
import { ManagementClientOptions } from './options/ManagementClientOptions';

const DEFAULT_OPTIONS: ManagementClientOptions = {
    timeout: 10000,
    onError: (code: number, message: string) => {
        throw { code, message };
    },
    host: 'https://core.authing.cn',
    requestFrom: 'sdk',
    headers: {
        'userpool-id': 'x-authing-userpool-id',
        'app-id': 'x-authing-app-id',
        'tenant-id': 'x-authing-app-tenant-id',
        'request-from': 'x-authing-request-from',
        'sdk-version': 'x-authing-sdk-version',
        lang: 'x-authing-lang',
    },
    lang: 'zh-CN',
};

export class ManagementClient {
    public options: ManagementClientOptions;
    public users: UsersManagementService;
    constructor(options: ManagementClientOptions) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        Axios.defaults.baseURL = this.options.host;
        this.users = new UsersManagementService(this.options);
    }
}
