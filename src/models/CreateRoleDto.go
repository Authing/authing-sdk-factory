package dto


type CreateRoleDto struct{
    Code String `json:"code,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
    Description String `json:"description,omitempty"`;
}

