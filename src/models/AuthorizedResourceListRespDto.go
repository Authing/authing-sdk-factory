package dto


type AuthorizedResourceListRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data List<AuthorizedResourceDto> `json:"data,omitempty"`;
}

