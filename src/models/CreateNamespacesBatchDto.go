package dto


type CreateNamespacesBatchDto struct{
    List List<CreateNamespacesBatchItemDto> `json:"list,omitempty"`;
}

