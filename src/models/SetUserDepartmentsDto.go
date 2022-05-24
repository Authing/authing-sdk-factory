package dto


type SetUserDepartmentsDto struct{
    Departments List<SetUserDepartmentDto> `json:"departments,omitempty"`;
    UserId String `json:"userId,omitempty"`;
}

