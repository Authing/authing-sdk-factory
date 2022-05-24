package dto


type CustomFieldListRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data List<CustomFieldDto> `json:"data,omitempty"`;
}

