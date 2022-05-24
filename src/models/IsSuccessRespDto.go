package dto


type IsSuccessRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data IsSuccessDto `json:"data,omitempty"`;
}

