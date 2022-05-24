package dto


type RoleSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data RoleDto `json:"data,omitempty"`;
}

