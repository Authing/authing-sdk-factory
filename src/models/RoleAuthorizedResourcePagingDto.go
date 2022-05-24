package dto


type RoleAuthorizedResourcePagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<RoleAuthorizedResourcesRespDto> `json:"list,omitempty"`;
}

