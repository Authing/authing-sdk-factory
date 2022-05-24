package dto


type SearchDepartmentsReqDto struct{
    Search String `json:"search,omitempty"`;
    OrganizationCode String `json:"organizationCode,omitempty"`;
}

