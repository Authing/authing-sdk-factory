package dto


type UpdateNamespaceRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data UpdateNamespaceDto `json:"data,omitempty"`;
}

