package dto


type UserLoggedInAppsListRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data List<UserLoggedInAppsDto> `json:"data,omitempty"`;
}

