package dto


type GetGroupAuthorizedResourcesDto struct{
    Code String `json:"code,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
    ResourceType String `json:"resource_type,omitempty"`;
}

