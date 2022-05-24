package dto


type RolePagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<RoleDto> `json:"list,omitempty"`;
}

