package dto


type DeleteRoleDto struct{
    CodeList List<String> `json:"codeList,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

