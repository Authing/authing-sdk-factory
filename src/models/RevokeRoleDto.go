package dto


type RevokeRoleDto struct{
    Targets List<TargetDto> `json:"targets,omitempty"`;
    Code String `json:"code,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

