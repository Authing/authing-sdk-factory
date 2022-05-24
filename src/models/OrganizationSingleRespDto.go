package dto


type OrganizationSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data OrganizationDto `json:"data,omitempty"`;
}

