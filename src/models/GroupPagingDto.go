package dto


type GroupPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<ResGroupDto> `json:"list,omitempty"`;
}

