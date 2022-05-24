package dto


type UpdateGroupReqDto struct{
    Description String `json:"description,omitempty"`;
    Name String `json:"name,omitempty"`;
    Code String `json:"code,omitempty"`;
    NewCode String `json:"newCode,omitempty"`;
}

