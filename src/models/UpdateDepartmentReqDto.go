package dto


type UpdateDepartmentReqDto struct{
    OrganizationCode String `json:"organizationCode,omitempty"`;
    ParentDepartmentId String `json:"parentDepartmentId,omitempty"`;
    DepartmentId String `json:"departmentId,omitempty"`;
    Code String `json:"code,omitempty"`;
    LeaderUserId String `json:"leaderUserId,omitempty"`;
    Name String `json:"name,omitempty"`;
    DepartmentIdType DepartmentIdType `json:"departmentIdType,omitempty"`;
}

/**
 * 此次调用中使用的部门 ID 的类型
 */
type  DepartmentIdType string

const (
    DepartmentId DEPARTMENT_ID = "department_id"
    OpenDepartmentId OPEN_DEPARTMENT_ID = "open_department_id"
)
