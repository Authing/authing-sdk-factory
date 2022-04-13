import { UsersManagementService } from './api/services/UsersManagementService';
import { ManagementClientOptions } from './options/ManagementClientOptions';

export class ManagementClient {
    public options: ManagementClientOptions;
    public users: UsersManagementService;
    constructor(options: ManagementClientOptions) {
        this.options = options;
        this.users = new UsersManagementService(options);
    }
}
