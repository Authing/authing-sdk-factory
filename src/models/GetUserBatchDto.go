package dto


type GetUserBatchDto struct{
    UserIds String `json:"user_ids,omitempty"`;
    WithCustomData Boolean `json:"with_custom_data,omitempty"`;
    WithIdentities Boolean `json:"with_identities,omitempty"`;
    WithDepartmentIds Boolean `json:"with_department_ids,omitempty"`;
}

