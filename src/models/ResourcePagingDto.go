package dto


type ResourcePagingDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<ResourceDto> `json:"list,omitempty"`;
}

