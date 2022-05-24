package dto


type CreateGroupReqDto struct{
    Description String `json:"description,omitempty"`;
    Name String `json:"name,omitempty"`;
    Code String `json:"code,omitempty"`;
}

