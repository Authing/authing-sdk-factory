package dto


type CreateResourcesBatchDto struct{
    List List<CreateResourceBatchItemDto> `json:"list,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

