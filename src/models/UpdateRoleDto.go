package dto


type UpdateRoleDto struct{
    NewCode String `json:"newCode,omitempty"`;
    Code String `json:"code,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
    Description String `json:"description,omitempty"`;
}

