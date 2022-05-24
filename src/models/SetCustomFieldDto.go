package dto


type SetCustomFieldDto struct{
    TargetType TargetType `json:"targetType,omitempty"`;
    DataType DataType `json:"dataType,omitempty"`;
    Key String `json:"key,omitempty"`;
    Label String `json:"label,omitempty"`;
    Description String `json:"description,omitempty"`;
    Encrypted Boolean `json:"encrypted,omitempty"`;
    Options List<CustomFieldSelectOption> `json:"options,omitempty"`;
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
/**
 * 数据类型
 */
type  DataType string

const (
    String STRING = "STRING"
    Number NUMBER = "NUMBER"
    Datetime DATETIME = "DATETIME"
    Boolean BOOLEAN = "BOOLEAN"
    Select SELECT = "SELECT"
)
