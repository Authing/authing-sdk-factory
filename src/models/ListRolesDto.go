package dto


type ListRolesDto struct{
    Namespace String `json:"namespace,omitempty"`;
    Page Integer `json:"page,omitempty"`;
    Limit Integer `json:"limit,omitempty"`;
}

