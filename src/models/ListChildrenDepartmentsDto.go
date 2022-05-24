package dto


type ListChildrenDepartmentsDto struct{
    DepartmentId String `json:"department_id,omitempty"`;
    OrganizationCode String `json:"organization_code,omitempty"`;
    DepartmentIdType String `json:"department_id_type,omitempty"`;
}

