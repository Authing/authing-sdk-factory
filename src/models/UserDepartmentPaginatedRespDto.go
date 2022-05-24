package dto


type UserDepartmentPaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data UserDepartmentPagingDto `json:"data,omitempty"`;
}

