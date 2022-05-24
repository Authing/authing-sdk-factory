package dto


type PrincipalAuthenticationInfoPaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data PrincipalAuthenticationInfoPagingDto `json:"data,omitempty"`;
}

