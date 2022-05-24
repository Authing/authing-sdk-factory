package dto


type AddGroupMembersReqDto struct{
    UserIds List<String> `json:"userIds,omitempty"`;
    Code String `json:"code,omitempty"`;
}

