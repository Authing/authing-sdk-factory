package dto


type GetUserRolesDto struct{
    UserId String `json:"user_id,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

