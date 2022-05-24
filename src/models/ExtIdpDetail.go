package dto


type ExtIdpDetail struct{
    Id String `json:"id,omitempty"`;
    Name String `json:"name,omitempty"`;
    TenantId String `json:"tenantId,omitempty"`;
    Type String `json:"type,omitempty"`;
    Connections Object `json:"connections,omitempty"`;
    AutoJoin Boolean `json:"autoJoin,omitempty"`;
}

