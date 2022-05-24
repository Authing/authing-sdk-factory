package dto


type ResourcePaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data ResourcePagingDto `json:"data,omitempty"`;
}

