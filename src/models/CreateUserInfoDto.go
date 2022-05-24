package dto


type CreateUserInfoDto struct{
    Status Status `json:"status,omitempty"`;
    Email String `json:"email,omitempty"`;
    PasswordEncryptType PasswordEncryptType `json:"passwordEncryptType,omitempty"`;
    Phone String `json:"phone,omitempty"`;
    PhoneCountryCode String `json:"phoneCountryCode,omitempty"`;
    Username String `json:"username,omitempty"`;
    Name String `json:"name,omitempty"`;
    Nickname String `json:"nickname,omitempty"`;
    Photo String `json:"photo,omitempty"`;
    Gender Gender `json:"gender,omitempty"`;
    EmailVerified Boolean `json:"emailVerified,omitempty"`;
    PhoneVerified Boolean `json:"phoneVerified,omitempty"`;
    Birthdate String `json:"birthdate,omitempty"`;
    Country String `json:"country,omitempty"`;
    Province String `json:"province,omitempty"`;
    City String `json:"city,omitempty"`;
    Address String `json:"address,omitempty"`;
    StreetAddress String `json:"streetAddress,omitempty"`;
    PostalCode String `json:"postalCode,omitempty"`;
    ExternalId String `json:"externalId,omitempty"`;
    DepartmentIds List<String> `json:"departmentIds,omitempty"`;
    CustomData Object `json:"customData,omitempty"`;
    Password String `json:"password,omitempty"`;
    TenantIds List<String> `json:"tenantIds,omitempty"`;
    Identities List<CreateIdentityDto> `json:"identities,omitempty"`;
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
 * 加密类型
 */
type  PasswordEncryptType string

const (
    Sm2 SM2 = "sm2"
    Rsa RSA = "rsa"
    None NONE = "none"
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
