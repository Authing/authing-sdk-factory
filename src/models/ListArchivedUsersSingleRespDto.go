package dto


type ListArchivedUsersSingleRespDto struct{
    Code Integer `json:"code,omitempty"`;
    Message String `json:"message,omitempty"`;
    ErrorCode Integer `json:"errorCode,omitempty"`;
    Data ListArchivedUsersRespDto `json:"data,omitempty"`;
}

