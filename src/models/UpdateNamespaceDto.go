package dto


type UpdateNamespaceDto struct{
    Code String `json:"code,omitempty"`;
    Description String `json:"description,omitempty"`;
    Name String `json:"name,omitempty"`;
    NewCode String `json:"newCode,omitempty"`;
}

