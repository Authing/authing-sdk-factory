package dto


type DepartmentListRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data List<DepartmentDto> `json:"data,omitempty"`;
}

