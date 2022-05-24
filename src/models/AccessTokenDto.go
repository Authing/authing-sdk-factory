package dto


type AccessTokenDto struct{
    AccessToken String `json:"access_token,omitempty"`;
    ExpiresIn Integer `json:"expires_in,omitempty"`;
}

