package dto


type UserPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<UserDto> `json:"list,omitempty"`;
}

