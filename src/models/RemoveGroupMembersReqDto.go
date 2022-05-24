package dto


type RemoveGroupMembersReqDto struct{
    UserIds List<String> `json:"userIds,omitempty"`;
    Code String `json:"code,omitempty"`;
}

