package dto


type SetCustomDataReqDto struct{
    List List<SetCustomDataDto> `json:"list,omitempty"`;
    TargetIdentifier String `json:"targetIdentifier,omitempty"`;
    TargetType TargetType `json:"targetType,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

/**
 * 主体类型，目前支持用户、角色、分组和部门
 */
type  TargetType string

const (
    User USER = "USER"
    Role ROLE = "ROLE"
    Group GROUP = "GROUP"
    Department DEPARTMENT = "DEPARTMENT"
)
