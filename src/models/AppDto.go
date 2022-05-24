package dto


type AppDto struct{
    AppId String `json:"appId,omitempty"`;
    AppName String `json:"appName,omitempty"`;
    AppLogo String `json:"appLogo,omitempty"`;
    AppLoginUrl String `json:"appLoginUrl,omitempty"`;
    AppDefaultLoginStrategy AppDefaultLoginStrategy `json:"appDefaultLoginStrategy,omitempty"`;
}

/**
 * App 默认的登录策略
 */
type  AppDefaultLoginStrategy string

const (
    AllowAll ALLOW_ALL = "ALLOW_ALL"
    DenyAll DENY_ALL = "DENY_ALL"
)
