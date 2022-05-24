package dto


type ListRoleDepartmentsDto struct{
    Code String `json:"code,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
    Page Integer `json:"page,omitempty"`;
    Limit Integer `json:"limit,omitempty"`;
}

