package dto


type UserLoginHistoryPaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data UserLoginHistoryPagingDto `json:"data,omitempty"`;
}

