package dto


type IdentityDto struct{
    IdentityId String `json:"identityId,omitempty"`;
    ExtIdpId String `json:"extIdpId,omitempty"`;
    Provider String `json:"provider,omitempty"`;
    Type String `json:"type,omitempty"`;
    UserIdInIdp String `json:"userIdInIdp,omitempty"`;
}

