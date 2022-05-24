package dto


type DepartmentDto struct{
    DepartmentId String `json:"departmentId,omitempty"`;
    OpenDepartmentId String `json:"openDepartmentId,omitempty"`;
    ParentDepartmentId String `json:"parentDepartmentId,omitempty"`;
    ParentOpenDepartmentId String `json:"parentOpenDepartmentId,omitempty"`;
    Name String `json:"name,omitempty"`;
    Description String `json:"description,omitempty"`;
    Code String `json:"code,omitempty"`;
    LeaderUserId String `json:"leaderUserId,omitempty"`;
    MembersCount Integer `json:"membersCount,omitempty"`;
    HasChildren Boolean `json:"hasChildren,omitempty"`;
}

