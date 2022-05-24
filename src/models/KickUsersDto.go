package dto


type KickUsersDto struct{
    AppIds List<String> `json:"appIds,omitempty"`;
    UserId String `json:"userId,omitempty"`;
}

