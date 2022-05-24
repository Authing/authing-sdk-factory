package dto


type IsUserExistsRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data IsUserExistsDto `json:"data,omitempty"`;
}

