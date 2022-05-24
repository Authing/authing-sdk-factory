package dto


type CreateExtIdpDto struct{
    Type Type `json:"type,omitempty"`;
    Name String `json:"name,omitempty"`;
    TenantId String `json:"tenantId,omitempty"`;
}

/**
 * 身份源连接类型
 */
type  Type string

const (
    Oidc OIDC = "oidc"
    Oauth2 OAUTH2 = "oauth2"
    Saml SAML = "saml"
    Ldap LDAP = "ldap"
    Ad AD = "ad"
    Cas CAS = "cas"
    AzureAd AZURE_AD = "azure-ad"
    Wechat WECHAT = "wechat"
    Google GOOGLE = "google"
    Qq QQ = "qq"
    Wechatwork WECHATWORK = "wechatwork"
    Dingtalk DINGTALK = "dingtalk"
    Weibo WEIBO = "weibo"
    Github GITHUB = "github"
    Alipay ALIPAY = "alipay"
    Apple APPLE = "apple"
    Baidu BAIDU = "baidu"
    Lark LARK = "lark"
    Gitlab GITLAB = "gitlab"
    Twitter TWITTER = "twitter"
    Facebook FACEBOOK = "facebook"
    Slack SLACK = "slack"
    Linkedin LINKEDIN = "linkedin"
    Yidun YIDUN = "yidun"
    Qingcloud QINGCLOUD = "qingcloud"
    Gitee GITEE = "gitee"
    Instagram INSTAGRAM = "instagram"
)
