package dto


type UserMfaRespDto struct{
    TotpStatus Boolean `json:"totpStatus,omitempty"`;
    FaceMfaStatus Boolean `json:"faceMfaStatus,omitempty"`;
}

