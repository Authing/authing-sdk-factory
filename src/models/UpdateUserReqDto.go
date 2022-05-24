package dto


type UpdateUserReqDto struct{
    UserId String `json:"userId,omitempty"`;
    PhoneCountryCode String `json:"phoneCountryCode,omitempty"`;
    Name String `json:"name,omitempty"`;
    Nickname String `json:"nickname,omitempty"`;
    Photo String `json:"photo,omitempty"`;
    ExternalId String `json:"externalId,omitempty"`;
    Status Status `json:"status,omitempty"`;
    EmailVerified Boolean `json:"emailVerified,omitempty"`;
    PhoneVerified Boolean `json:"phoneVerified,omitempty"`;
    Birthdate String `json:"birthdate,omitempty"`;
    Country String `json:"country,omitempty"`;
    Province String `json:"province,omitempty"`;
    City String `json:"city,omitempty"`;
    Address String `json:"address,omitempty"`;
    StreetAddress String `json:"streetAddress,omitempty"`;
    PostalCode String `json:"postalCode,omitempty"`;
    Gender Gender `json:"gender,omitempty"`;
    Username String `json:"username,omitempty"`;
    PasswordEncryptType PasswordEncryptType `json:"passwordEncryptType,omitempty"`;
    Email String `json:"email,omitempty"`;
    Phone String `json:"phone,omitempty"`;
    Password String `json:"password,omitempty"`;
    CustomData Object `json:"customData,omitempty"`;
}

/**
 * 账户当前状态
 */
type  Status string

const (
    Deleted DELETED = "Deleted"
    Suspended SUSPENDED = "Suspended"
    Resigned RESIGNED = "Resigned"
    Activated ACTIVATED = "Activated"
    Archived ARCHIVED = "Archived"
)
/**
 * 性别
 */
type  Gender string

const (
    M M = "M"
    W W = "W"
    U U = "U"
)
/**
 * 加密类型
 */
type  PasswordEncryptType string

const (
    Sm2 SM2 = "sm2"
    Rsa RSA = "rsa"
    None NONE = "none"
)
