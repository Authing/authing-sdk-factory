package dto


type UserLoginHistoryPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<UserLoginHistoryDto> `json:"list,omitempty"`;
}

