package dto


type IsUserExistsReqDto struct{
    Username String `json:"username,omitempty"`;
    Email String `json:"email,omitempty"`;
    Phone String `json:"phone,omitempty"`;
    ExternalId String `json:"externalId,omitempty"`;
}

