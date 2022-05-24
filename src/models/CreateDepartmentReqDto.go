package dto


type CreateDepartmentReqDto struct{
    OrganizationCode String `json:"organizationCode,omitempty"`;
    Name String `json:"name,omitempty"`;
    ParentDepartmentId String `json:"parentDepartmentId,omitempty"`;
    OpenDepartmentId String `json:"openDepartmentId,omitempty"`;
    Code String `json:"code,omitempty"`;
    LeaderUserId String `json:"leaderUserId,omitempty"`;
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
