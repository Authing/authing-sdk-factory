package dto


type DepartmentPagingDto struct{
    TotalCount Boolean `json:"totalCount,omitempty"`;
    List List<DepartmentDto> `json:"list,omitempty"`;
}

