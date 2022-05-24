package dto


type GetManagementTokenRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data AccessTokenDto `json:"data,omitempty"`;
}

