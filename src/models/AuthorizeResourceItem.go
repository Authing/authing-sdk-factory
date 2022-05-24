package dto


type AuthorizeResourceItem struct{
    TargetType TargetType `json:"targetType,omitempty"`;
    TargetIdentifiers List<String> `json:"targetIdentifiers,omitempty"`;
    Resources List<ResourceItemDto> `json:"resources,omitempty"`;
}

/**
 * 目标对象类型
 */
type  TargetType string

const (
    User USER = "USER"
    Role ROLE = "ROLE"
    Group GROUP = "GROUP"
    Department DEPARTMENT = "DEPARTMENT"
)
