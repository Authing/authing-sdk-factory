package dto


type UserMfaSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data UserMfaRespDto `json:"data,omitempty"`;
}

