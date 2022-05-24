package dto


type ExtIdpListPaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data ExtIdpListPagingDto `json:"data,omitempty"`;
}

