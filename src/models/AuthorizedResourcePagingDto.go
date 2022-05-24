package dto


type AuthorizedResourcePagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<AuthorizedResourceDto> `json:"list,omitempty"`;
}

