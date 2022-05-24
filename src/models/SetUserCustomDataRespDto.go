package dto


type SetUserCustomDataRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data SetUserCustomDataDto `json:"data,omitempty"`;
}

