package dto


type RoleDepartmentListPaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data RoleDepartmentListPagingDto `json:"data,omitempty"`;
}

