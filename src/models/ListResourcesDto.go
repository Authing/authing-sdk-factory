package dto


type ListResourcesDto struct{
    Namespace String `json:"namespace,omitempty"`;
    Type String `json:"type,omitempty"`;
    Page Integer `json:"page,omitempty"`;
    Limit Integer `json:"limit,omitempty"`;
}

