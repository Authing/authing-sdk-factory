package dto


type AddDepartmentMembersReqDto struct{
    UserIds List<String> `json:"userIds,omitempty"`;
    OrganizationCode String `json:"organizationCode,omitempty"`;
    DepartmentId String `json:"departmentId,omitempty"`;
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
