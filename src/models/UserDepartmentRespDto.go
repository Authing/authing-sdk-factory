package dto


type UserDepartmentRespDto struct{
    DepartmentId String `json:"departmentId,omitempty"`;
    Name String `json:"name,omitempty"`;
    Description String `json:"description,omitempty"`;
    IsLeader Boolean `json:"isLeader,omitempty"`;
    Code String `json:"code,omitempty"`;
    IsMainDepartment Boolean `json:"isMainDepartment,omitempty"`;
}

