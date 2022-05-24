package dto


type GetUserLoginHistoryDto struct{
    UserId String `json:"user_id,omitempty"`;
    AppId String `json:"app_id,omitempty"`;
    ClientIp String `json:"client_ip,omitempty"`;
    Start Integer `json:"start,omitempty"`;
    End Integer `json:"end,omitempty"`;
    Page Integer `json:"page,omitempty"`;
    Limit Integer `json:"limit,omitempty"`;
}

