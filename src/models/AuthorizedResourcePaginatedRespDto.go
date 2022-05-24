package dto


type AuthorizedResourcePaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data AuthorizedResourcePagingDto `json:"data,omitempty"`;
}

