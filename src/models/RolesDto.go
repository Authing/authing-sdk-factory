package dto


type RolesDto struct{
    Description String `json:"description,omitempty"`;
    Code String `json:"code,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

