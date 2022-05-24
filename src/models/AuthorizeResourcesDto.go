package dto


type AuthorizeResourcesDto struct{
    List List<AuthorizeResourceItem> `json:"list,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

