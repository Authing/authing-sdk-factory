package dto


type CreateIdentityDto struct{
    ExtIdpId String `json:"extIdpId,omitempty"`;
    Provider String `json:"provider,omitempty"`;
    Type String `json:"type,omitempty"`;
    UserIdInIdp String `json:"userIdInIdp,omitempty"`;
}

