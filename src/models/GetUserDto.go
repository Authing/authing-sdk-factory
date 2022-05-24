package dto


type GetUserDto struct{
    UserId String `json:"user_id,omitempty"`;
    WithCustomData Boolean `json:"with_custom_data,omitempty"`;
    WithIdentities Boolean `json:"with_identities,omitempty"`;
    WithDepartmentIds Boolean `json:"with_department_ids,omitempty"`;
    Phone String `json:"phone,omitempty"`;
    Email String `json:"email,omitempty"`;
    Username String `json:"username,omitempty"`;
    ExternalId String `json:"externalId,omitempty"`;
}

