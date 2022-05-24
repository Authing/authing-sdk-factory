package dto


type CreateExtIdpConnDto struct{
    Fields Object `json:"fields,omitempty"`;
    DisplayName String `json:"displayName,omitempty"`;
    Identifier String `json:"identifier,omitempty"`;
    Type Type `json:"type,omitempty"`;
    ExtIdpId String `json:"extIdpId,omitempty"`;
    LoginOnly Boolean `json:"loginOnly,omitempty"`;
    Logo String `json:"logo,omitempty"`;
}

/**
 * 身份源连接类型
 */
type  Type string

const (
    Oidc OIDC = "oidc"
    Oauth OAUTH = "oauth"
    Saml SAML = "saml"
    Ldap LDAP = "ldap"
    Ad AD = "ad"
    Cas CAS = "cas"
    AzureAd AZURE_AD = "azure-ad"
    Alipay ALIPAY = "alipay"
    Facebook FACEBOOK = "facebook"
    Twitter TWITTER = "twitter"
    Google GOOGLE = "google"
    WechatPc WECHAT_PC = "wechat:pc"
    WechatMobile WECHAT_MOBILE = "wechat:mobile"
    WechatWebpageAuthorization WECHAT_WEBPAGE_AUTHORIZATION = "wechat:webpage-authorization"
    WechatmpQrcode WECHATMP_QRCODE = "wechatmp-qrcode"
    WechatMiniprogramDefault WECHAT_MINIPROGRAM_DEFAULT = "wechat:miniprogram:default"
    WechatMiniprogramQrconnect WECHAT_MINIPROGRAM_QRCONNECT = "wechat:miniprogram:qrconnect"
    WechatMiniprogramAppLaunch WECHAT_MINIPROGRAM_APP_LAUNCH = "wechat:miniprogram:app-launch"
    Github GITHUB = "github"
    Qq QQ = "qq"
    WechatworkCorpQrconnect WECHATWORK_CORP_QRCONNECT = "wechatwork:corp:qrconnect"
    WechatworkAgencyQrconnect WECHATWORK_AGENCY_QRCONNECT = "wechatwork:agency:qrconnect"
    WechatworkServiceProviderQrconnect WECHATWORK_SERVICE_PROVIDER_QRCONNECT = "wechatwork:service-provider:qrconnect"
    WechatworkMobile WECHATWORK_MOBILE = "wechatwork:mobile"
    Dingtalk DINGTALK = "dingtalk"
    DingtalkProvider DINGTALK_PROVIDER = "dingtalk:provider"
    Weibo WEIBO = "weibo"
    Apple APPLE = "apple"
    AppleWeb APPLE_WEB = "apple:web"
    Baidu BAIDU = "baidu"
    LarkInternal LARK_INTERNAL = "lark-internal"
    LarkPublic LARK_PUBLIC = "lark-public"
    Gitlab GITLAB = "gitlab"
    Linkedin LINKEDIN = "linkedin"
    Slack SLACK = "slack"
    Yidun YIDUN = "yidun"
    Qingcloud QINGCLOUD = "qingcloud"
    Gitee GITEE = "gitee"
    Instagram INSTAGRAM = "instagram"
)
