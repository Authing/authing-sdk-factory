package dto


type UserLoginHistoryDto struct{
    AppId String `json:"appId,omitempty"`;
    AppName String `json:"appName,omitempty"`;
    AppLogo String `json:"appLogo,omitempty"`;
    AppLoginUrl String `json:"appLoginUrl,omitempty"`;
    ClientIp String `json:"clientIp,omitempty"`;
    UserAgent String `json:"userAgent,omitempty"`;
    Time String `json:"time,omitempty"`;
}

