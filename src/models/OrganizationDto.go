package dto


type OrganizationDto struct{
    OrganizationCode String `json:"organizationCode,omitempty"`;
    OrganizationName String `json:"organizationName,omitempty"`;
    DepartmentId String `json:"departmentId,omitempty"`;
    OpenDepartmentId String `json:"openDepartmentId,omitempty"`;
    HasChildren Boolean `json:"hasChildren,omitempty"`;
    LeaderUserId String `json:"leaderUserId,omitempty"`;
    MembersCount Integer `json:"membersCount,omitempty"`;
}

