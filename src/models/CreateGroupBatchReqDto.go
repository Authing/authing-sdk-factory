package dto


type CreateGroupBatchReqDto struct{
    List List<CreateGroupReqDto> `json:"list,omitempty"`;
}

