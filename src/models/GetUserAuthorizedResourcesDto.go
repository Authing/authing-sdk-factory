package dto


type GetUserAuthorizedResourcesDto struct{
    UserId String `json:"user_id,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
    ResourceType String `json:"resource_type,omitempty"`;
}

