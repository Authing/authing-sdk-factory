package dto


type CreateOrganizationReqDto struct{
    OrganizationName String `json:"organizationName,omitempty"`;
    OrganizationCode String `json:"organizationCode,omitempty"`;
    OpenDepartmentId String `json:"openDepartmentId,omitempty"`;
}

