package dto


type OrganizationPaginatedRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data OrganizationPagingDto `json:"data,omitempty"`;
}

