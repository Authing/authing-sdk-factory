package dto


type HasAnyRoleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data HasAnyRoleDto `json:"data,omitempty"`;
}

