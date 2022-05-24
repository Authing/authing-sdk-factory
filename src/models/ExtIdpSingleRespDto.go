package dto


type ExtIdpSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data ExtIdpDto `json:"data,omitempty"`;
}

