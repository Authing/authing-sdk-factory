package dto


type ListGroupMembersDto struct{
    Code String `json:"code,omitempty"`;
    Page Integer `json:"page,omitempty"`;
    Limit Integer `json:"limit,omitempty"`;
    WithCustomData Boolean `json:"with_custom_data,omitempty"`;
    WithIdentities Boolean `json:"with_identities,omitempty"`;
    WithDepartmentIds Boolean `json:"with_department_ids,omitempty"`;
}

