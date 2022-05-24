package dto


type ExtIdpConnDetailSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data ExtIdpConnDto `json:"data,omitempty"`;
}

