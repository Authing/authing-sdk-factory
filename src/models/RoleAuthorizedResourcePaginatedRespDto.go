package dto


type RoleAuthorizedResourcePaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data RoleAuthorizedResourcePagingDto `json:"data,omitempty"`;
}

