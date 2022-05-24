package dto


type UserDto struct{
    UserId String `json:"userId,omitempty"`;
    Status Status `json:"status,omitempty"`;
    Email String `json:"email,omitempty"`;
    Phone String `json:"phone,omitempty"`;
    PhoneCountryCode String `json:"phoneCountryCode,omitempty"`;
    Username String `json:"username,omitempty"`;
    Name String `json:"name,omitempty"`;
    Nickname String `json:"nickname,omitempty"`;
    Photo String `json:"photo,omitempty"`;
    LoginsCount Integer `json:"loginsCount,omitempty"`;
    LastLogin String `json:"lastLogin,omitempty"`;
    LastIp String `json:"lastIp,omitempty"`;
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
    Identities List<IdentityDto> `json:"identities,omitempty"`;
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
