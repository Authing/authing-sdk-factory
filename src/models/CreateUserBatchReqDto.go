package dto


type CreateUserBatchReqDto struct{
    List List<CreateUserInfoDto> `json:"list,omitempty"`;
    Options CreateUserOptionsDto `json:"options,omitempty"`;
}

