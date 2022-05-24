package dto


type DepartmentSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data DepartmentDto `json:"data,omitempty"`;
}

