package dto


type CreateRolesBatch struct{
    List List<RoleListItem> `json:"list,omitempty"`;
}

