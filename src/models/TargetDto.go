package dto


type TargetDto struct{
    TargetType TargetType `json:"targetType,omitempty"`;
    TargetIdentifier String `json:"targetIdentifier,omitempty"`;
}

/**
 * 目标类型，接受用户，部门
 */
type  TargetType string

const (
    User USER = "USER"
    Role ROLE = "ROLE"
    Group GROUP = "GROUP"
    Department DEPARTMENT = "DEPARTMENT"
)
