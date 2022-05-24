package dto


type EnableExtIdpConnDto struct{
    AppId String `json:"appId,omitempty"`;
    Enabled Boolean `json:"enabled,omitempty"`;
    Id String `json:"id,omitempty"`;
    TenantId String `json:"tenantId,omitempty"`;
}

