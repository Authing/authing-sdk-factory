package dto


type PrincipalAuthenticationInfoPagingDto struct{
    TotalCount Integer `json:"totalCount,omitempty"`;
    List List<PrincipalAuthenticationInfoDto> `json:"list,omitempty"`;
}

