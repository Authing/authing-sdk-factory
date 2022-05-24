package dto


type SetUserDepartmentDto struct{
    DepartmentId String `json:"departmentId,omitempty"`;
    IsLeader Boolean `json:"isLeader,omitempty"`;
    IsMainDepartment Boolean `json:"isMainDepartment,omitempty"`;
}

