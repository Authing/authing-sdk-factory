package dto


type CreateUserOptionsDto struct{
    KeepPassword Boolean `json:"keepPassword,omitempty"`;
    ResetPasswordOnFirstLogin Boolean `json:"resetPasswordOnFirstLogin,omitempty"`;
    DepartmentIdType DepartmentIdType `json:"departmentIdType,omitempty"`;
}

/**
 * 此次调用中使用的父部门 ID 的类型
 */
type  DepartmentIdType string

const (
    DepartmentId DEPARTMENT_ID = "department_id"
    OpenDepartmentId OPEN_DEPARTMENT_ID = "open_department_id"
)
