package dto


type AssignRoleBatchDto struct{
    Targets List<TargetDto> `json:"targets,omitempty"`;
    Roles List<RoleCodeDto> `json:"roles,omitempty"`;
}

