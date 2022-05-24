package dto


type CreateNamespaceDto struct{
    Code String `json:"code,omitempty"`;
    Name String `json:"name,omitempty"`;
    Description String `json:"description,omitempty"`;
}

