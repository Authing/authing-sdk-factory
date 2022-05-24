package dto


type UserLoggedInAppsDto struct{
    AppId String `json:"appId,omitempty"`;
    AppName String `json:"appName,omitempty"`;
    AppLogo String `json:"appLogo,omitempty"`;
    AppLoginUrl String `json:"appLoginUrl,omitempty"`;
}

