package dto


type ListDepartmentMembersDto struct{
    OrganizationCode String `json:"organization_code,omitempty"`;
    DepartmentId String `json:"department_id,omitempty"`;
    DepartmentIdType String `json:"department_id_type,omitempty"`;
    Page Integer `json:"page,omitempty"`;
    Limit Integer `json:"limit,omitempty"`;
    WithCustomData Boolean `json:"with_custom_data,omitempty"`;
    WithIdentities Boolean `json:"with_identities,omitempty"`;
    WithDepartmentIds Boolean `json:"with_department_ids,omitempty"`;
}

