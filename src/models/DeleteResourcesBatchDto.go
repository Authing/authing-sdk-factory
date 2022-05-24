package dto


type DeleteResourcesBatchDto struct{
    CodeList List<String> `json:"codeList,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

