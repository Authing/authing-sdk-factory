package dto


type ExtIdpDetailSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data ExtIdpDetail `json:"data,omitempty"`;
}

