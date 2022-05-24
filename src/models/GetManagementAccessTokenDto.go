package dto


type GetManagementAccessTokenDto struct{
    AccessKeySecret String `json:"accessKeySecret,omitempty"`;
    AccessKeyId String `json:"accessKeyId,omitempty"`;
}

