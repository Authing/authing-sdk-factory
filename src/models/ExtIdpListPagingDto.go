package dto


type ExtIdpListPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<ExtIdpDto> `json:"list,omitempty"`;
}

