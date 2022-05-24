package dto


type UserDepartmentPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<UserDepartmentRespDto> `json:"list,omitempty"`;
}

