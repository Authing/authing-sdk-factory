package dto


type GetParentDepartmentDto struct{
    OrganizationCode String `json:"organization_code,omitempty"`;
    DepartmentId String `json:"department_id,omitempty"`;
    DepartmentIdType String `json:"department_id_type,omitempty"`;
}

