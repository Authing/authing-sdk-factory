package dto


type HasAnyRoleReqDto struct{
    Roles List<HasRoleRolesDto> `json:"roles,omitempty"`;
    UserId String `json:"userId,omitempty"`;
}

