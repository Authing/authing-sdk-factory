package dto


type GetAuthorizedResourcesDto struct{
    TargetType String `json:"target_type,omitempty"`;
    TargetIdentifier String `json:"target_identifier,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
    ResourceType String `json:"resource_type,omitempty"`;
}

