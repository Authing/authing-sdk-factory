package dto


type PrincipalAuthenticationInfoDto struct{
    Authenticated Boolean `json:"authenticated,omitempty"`;
    PrincipalType String `json:"principalType,omitempty"`;
    PrincipalCode String `json:"principalCode,omitempty"`;
    PrincipalName String `json:"principalName,omitempty"`;
    AuthenticatedAt String `json:"authenticatedAt,omitempty"`;
}

