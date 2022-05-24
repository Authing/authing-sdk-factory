package dto


type UpdateExtIdpConnDto struct{
    Fields Object `json:"fields,omitempty"`;
    DisplayName String `json:"displayName,omitempty"`;
    Id String `json:"id,omitempty"`;
    Logo String `json:"logo,omitempty"`;
    LoginOnly Boolean `json:"loginOnly,omitempty"`;
}

