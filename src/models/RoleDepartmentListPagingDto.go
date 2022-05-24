package dto


type RoleDepartmentListPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<RoleDepartmentRespDto> `json:"list,omitempty"`;
}

