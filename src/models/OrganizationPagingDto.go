package dto


type OrganizationPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<OrganizationDto> `json:"list,omitempty"`;
}

