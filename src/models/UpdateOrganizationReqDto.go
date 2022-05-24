package dto


type UpdateOrganizationReqDto struct{
    OrganizationCode String `json:"organizationCode,omitempty"`;
    OpenDepartmentId String `json:"openDepartmentId,omitempty"`;
    OrganizationNewCode String `json:"organizationNewCode,omitempty"`;
    OrganizationName String `json:"organizationName,omitempty"`;
}

