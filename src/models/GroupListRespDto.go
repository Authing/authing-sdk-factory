package dto


type GroupListRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data List<GroupDto> `json:"data,omitempty"`;
}

