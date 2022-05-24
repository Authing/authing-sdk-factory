package client

import "authing-go-sdk/dto"

func (c *Client) GetManagementToken (reqDto *dto.GetManagementAccessTokenDto) *dto.GetManagementTokenRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-management-token", constant.HttpMethodPost, reqDto)
    var response dto.GetManagementAccessTokenDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUser (reqDto *dto.GetUserDto) *dto.UserSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user", constant.HttpMethodGet, reqDto)
    var response dto.GetUserDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserBatch (reqDto *dto.GetUserBatchDto) *dto.UserListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-batch", constant.HttpMethodGet, reqDto)
    var response dto.GetUserBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListUsers (reqDto *dto.ListUsersDto) *dto.UserPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-users", constant.HttpMethodGet, reqDto)
    var response dto.ListUsersDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserIdentities (reqDto *dto.GetUserIdentitiesDto) *dto.IdentityListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-identities", constant.HttpMethodGet, reqDto)
    var response dto.GetUserIdentitiesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserRoles (reqDto *dto.GetUserRolesDto) *dto.RolePaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-roles", constant.HttpMethodGet, reqDto)
    var response dto.GetUserRolesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetPrincipalAuthenticationInfo (reqDto *dto.GetUserPrincipalAuthenticationInfoDto) *dto.PrincipalAuthenticationInfoPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-principal-authentication-info", constant.HttpMethodGet, reqDto)
    var response dto.GetUserPrincipalAuthenticationInfoDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ResetPrincipalAuthenticationInfo (reqDto *dto.ResetUserPrincipalAuthenticationInfoDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/reset-user-principal-authentication-info", constant.HttpMethodPost, reqDto)
    var response dto.ResetUserPrincipalAuthenticationInfoDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserDepartments (reqDto *dto.GetUserDepartmentsDto) *dto.UserDepartmentPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-departments", constant.HttpMethodGet, reqDto)
    var response dto.GetUserDepartmentsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) SetUserDepartment (reqDto *dto.SetUserDepartmentsDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/set-user-departments", constant.HttpMethodPost, reqDto)
    var response dto.SetUserDepartmentsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserGroups (reqDto *dto.GetUserGroupsDto) *dto.GroupPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-groups", constant.HttpMethodGet, reqDto)
    var response dto.GetUserGroupsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteUserBatch (reqDto *dto.DeleteUsersBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-users-batch", constant.HttpMethodPost, reqDto)
    var response dto.DeleteUsersBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserMfaInfo (reqDto *dto.GetUserMfaInfoDto) *dto.UserMfaSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-mfa-info", constant.HttpMethodGet, reqDto)
    var response dto.GetUserMfaInfoDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListArchivedUsers (reqDto *dto.ListArchivedUsersDto) *dto.ListArchivedUsersSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-archived-users", constant.HttpMethodGet, reqDto)
    var response dto.ListArchivedUsersDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) KickUsers (reqDto *dto.KickUsersDto) *dto.IsUserExistsRespDto  {
    b, err := c.SendHttpRequest("/api/v3/kick-users", constant.HttpMethodPost, reqDto)
    var response dto.KickUsersDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) IsUserExists (reqDto *dto.IsUserExistsReqDto) *dto.IsUserExistsRespDto  {
    b, err := c.SendHttpRequest("/api/v3/is-user-exists", constant.HttpMethodPost, reqDto)
    var response dto.IsUserExistsReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateUser (reqDto *dto.CreateUserReqDto) *dto.UserSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-user", constant.HttpMethodPost, reqDto)
    var response dto.CreateUserReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateUserBatch (reqDto *dto.CreateUserBatchReqDto) *dto.UserListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-users-batch", constant.HttpMethodPost, reqDto)
    var response dto.CreateUserBatchReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateUser (reqDto *dto.UpdateUserReqDto) *dto.UserSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-user", constant.HttpMethodPost, reqDto)
    var response dto.UpdateUserReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserAccessibleApps (reqDto *dto.GetUserAccessibleAppsDto) *dto.AppListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-accessible-apps", constant.HttpMethodGet, reqDto)
    var response dto.GetUserAccessibleAppsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserAuthorizedApps (reqDto *dto.GetUserAuthorizedAppsDto) *dto.AppListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-authorized-apps", constant.HttpMethodGet, reqDto)
    var response dto.GetUserAuthorizedAppsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) HasAnyRole (reqDto *dto.HasAnyRoleReqDto) *dto.HasAnyRoleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/has-any-role", constant.HttpMethodPost, reqDto)
    var response dto.HasAnyRoleReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserLoginHistory (reqDto *dto.GetUserLoginHistoryDto) *dto.UserLoginHistoryPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-login-history", constant.HttpMethodGet, reqDto)
    var response dto.GetUserLoginHistoryDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserLoggedInApps (reqDto *dto.GetUserLoggedinAppsDto) *dto.UserLoggedInAppsListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-loggedin-apps", constant.HttpMethodGet, reqDto)
    var response dto.GetUserLoggedinAppsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetUserAuthorizedResources (reqDto *dto.GetUserAuthorizedResourcesDto) *dto.AuthorizedResourcePaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-user-authorized-resources", constant.HttpMethodGet, reqDto)
    var response dto.GetUserAuthorizedResourcesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetGroup (reqDto *dto.GetGroupDto) *dto.GroupSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-group", constant.HttpMethodGet, reqDto)
    var response dto.GetGroupDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetGroupList (reqDto *dto.ListGroupsDto) *dto.GroupPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-groups", constant.HttpMethodGet, reqDto)
    var response dto.ListGroupsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateGroup (reqDto *dto.CreateGroupReqDto) *dto.GroupSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-group", constant.HttpMethodPost, reqDto)
    var response dto.CreateGroupReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateGroupBatch (reqDto *dto.CreateGroupBatchReqDto) *dto.GroupListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-groups-batch", constant.HttpMethodPost, reqDto)
    var response dto.CreateGroupBatchReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateGroup (reqDto *dto.UpdateGroupReqDto) *dto.GroupSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-group", constant.HttpMethodPost, reqDto)
    var response dto.UpdateGroupReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteGroups (reqDto *dto.DeleteGroupsReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-groups-batch", constant.HttpMethodPost, reqDto)
    var response dto.DeleteGroupsReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) AddGroupMembers (reqDto *dto.AddGroupMembersReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/add-group-members", constant.HttpMethodPost, reqDto)
    var response dto.AddGroupMembersReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) RemoveGroupMembers (reqDto *dto.RemoveGroupMembersReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/remove-group-members", constant.HttpMethodPost, reqDto)
    var response dto.RemoveGroupMembersReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListGroupMembers (reqDto *dto.ListGroupMembersDto) *dto.UserPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-group-members", constant.HttpMethodGet, reqDto)
    var response dto.ListGroupMembersDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetGroupAuthorizedResources (reqDto *dto.GetGroupAuthorizedResourcesDto) *dto.AuthorizedResourceListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-group-authorized-resources", constant.HttpMethodGet, reqDto)
    var response dto.GetGroupAuthorizedResourcesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetRole (reqDto *dto.GetRoleDto) *dto.RoleSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-role", constant.HttpMethodGet, reqDto)
    var response dto.GetRoleDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) AssignRole (reqDto *dto.AssignRoleDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/assign-role", constant.HttpMethodPost, reqDto)
    var response dto.AssignRoleDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) AssignRoleBatch (reqDto *dto.AssignRoleBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/assign-role-batch", constant.HttpMethodPost, reqDto)
    var response dto.AssignRoleBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) RevokeRole (reqDto *dto.RevokeRoleDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/revoke-role", constant.HttpMethodPost, reqDto)
    var response dto.RevokeRoleDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) RevokeRoleBatch (reqDto *dto.RevokeRoleBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/revoke-role-batch", constant.HttpMethodPost, reqDto)
    var response dto.RevokeRoleBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetRoleAuthorizedResources (reqDto *dto.GetRoleAuthorizedResourcesDto) *dto.RoleAuthorizedResourcePaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-role-authorized-resources", constant.HttpMethodGet, reqDto)
    var response dto.GetRoleAuthorizedResourcesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListRoleMembers (reqDto *dto.ListRoleMembersDto) *dto.UserPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-role-members", constant.HttpMethodGet, reqDto)
    var response dto.ListRoleMembersDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListRoleDepartments (reqDto *dto.ListRoleDepartmentsDto) *dto.RoleDepartmentListPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-role-departments", constant.HttpMethodGet, reqDto)
    var response dto.ListRoleDepartmentsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateRole (reqDto *dto.CreateRoleDto) *dto.RoleSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-role", constant.HttpMethodPost, reqDto)
    var response dto.CreateRoleDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListRoles (reqDto *dto.ListRolesDto) *dto.RolePaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-roles", constant.HttpMethodGet, reqDto)
    var response dto.ListRolesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteRolesBatch (reqDto *dto.DeleteRoleDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-roles-batch", constant.HttpMethodPost, reqDto)
    var response dto.DeleteRoleDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateRolesBatch (reqDto *dto.CreateRolesBatch) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-roles-batch", constant.HttpMethodPost, reqDto)
    var response dto.CreateRolesBatch
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateRole (reqDto *dto.UpdateRoleDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-role", constant.HttpMethodPost, reqDto)
    var response dto.UpdateRoleDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListOrganizations (reqDto *dto.ListOrganizationsDto) *dto.OrganizationPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-organizations", constant.HttpMethodGet, reqDto)
    var response dto.ListOrganizationsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateOrganization (reqDto *dto.CreateOrganizationReqDto) *dto.OrganizationSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-organization", constant.HttpMethodPost, reqDto)
    var response dto.CreateOrganizationReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateOrganization (reqDto *dto.UpdateOrganizationReqDto) *dto.OrganizationSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-organization", constant.HttpMethodPost, reqDto)
    var response dto.UpdateOrganizationReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteOrganization (reqDto *dto.DeleteOrganizationReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-organization", constant.HttpMethodPost, reqDto)
    var response dto.DeleteOrganizationReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetDepartment (reqDto *dto.GetDepartmentDto) *dto.DepartmentSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-department", constant.HttpMethodGet, reqDto)
    var response dto.GetDepartmentDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateDepartment (reqDto *dto.CreateDepartmentReqDto) *dto.DepartmentSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-department", constant.HttpMethodPost, reqDto)
    var response dto.CreateDepartmentReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateDepartment (reqDto *dto.UpdateDepartmentReqDto) *dto.DepartmentSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-department", constant.HttpMethodPost, reqDto)
    var response dto.UpdateDepartmentReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteDepartment (reqDto *dto.DeleteDepartmentReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-department", constant.HttpMethodPost, reqDto)
    var response dto.DeleteDepartmentReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) SearchDepartments (reqDto *dto.SearchDepartmentsReqDto) *dto.DepartmentListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/search-departments", constant.HttpMethodPost, reqDto)
    var response dto.SearchDepartmentsReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListChildrenDepartments (reqDto *dto.ListChildrenDepartmentsDto) *dto.DepartmentPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-children-departments", constant.HttpMethodGet, reqDto)
    var response dto.ListChildrenDepartmentsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListDepartmentMembers (reqDto *dto.ListDepartmentMembersDto) *dto.UserListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-department-members", constant.HttpMethodGet, reqDto)
    var response dto.ListDepartmentMembersDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListDepartmentMemberIds (reqDto *dto.ListDepartmentMemberIdsDto) *dto.UserIdListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-department-member-ids", constant.HttpMethodGet, reqDto)
    var response dto.ListDepartmentMemberIdsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) AddDepartmentMembers (reqDto *dto.AddDepartmentMembersReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/add-department-members", constant.HttpMethodPost, reqDto)
    var response dto.AddDepartmentMembersReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) RemoveDepartmentMembers (reqDto *dto.RemoveDepartmentMembersReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/remove-department-members", constant.HttpMethodPost, reqDto)
    var response dto.RemoveDepartmentMembersReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetParentDepartment (reqDto *dto.GetParentDepartmentDto) *dto.DepartmentSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-parent-department", constant.HttpMethodGet, reqDto)
    var response dto.GetParentDepartmentDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListExtIdp (reqDto *dto.ListExtIdpDto) *dto.ExtIdpListPaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-ext-idp", constant.HttpMethodGet, reqDto)
    var response dto.ListExtIdpDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetExtIdp (reqDto *dto.GetExtIdpDto) *dto.ExtIdpDetailSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-ext-idp", constant.HttpMethodGet, reqDto)
    var response dto.GetExtIdpDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateExtIdp (reqDto *dto.CreateExtIdpDto) *dto.ExtIdpSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-ext-idp", constant.HttpMethodPost, reqDto)
    var response dto.CreateExtIdpDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateExtIdp (reqDto *dto.UpdateExtIdpDto) *dto.ExtIdpSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-ext-idp", constant.HttpMethodPost, reqDto)
    var response dto.UpdateExtIdpDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteExtIdp (reqDto *dto.DeleteExtIdpDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-ext-idp", constant.HttpMethodPost, reqDto)
    var response dto.DeleteExtIdpDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateExtIdpConn (reqDto *dto.CreateExtIdpConnDto) *dto.ExtIdpConnDetailSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-ext-idp-conn", constant.HttpMethodPost, reqDto)
    var response dto.CreateExtIdpConnDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateExtIdpConn (reqDto *dto.UpdateExtIdpConnDto) *dto.ExtIdpConnDetailSingleRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-ext-idp-conn", constant.HttpMethodPost, reqDto)
    var response dto.UpdateExtIdpConnDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteExtIdpConn (reqDto *dto.DeleteExtIdpConnDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-ext-idp-conn", constant.HttpMethodPost, reqDto)
    var response dto.DeleteExtIdpConnDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ChangeConnState (reqDto *dto.EnableExtIdpConnDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/enable-ext-idp-conn", constant.HttpMethodPost, reqDto)
    var response dto.EnableExtIdpConnDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetCustomFields (reqDto *dto.GetCustomFieldsDto) *dto.CustomFieldListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-custom-fields", constant.HttpMethodGet, reqDto)
    var response dto.GetCustomFieldsDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) SetCustomFields (reqDto *dto.SetCustomFieldsReqDto) *dto.CustomFieldListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/set-custom-fields", constant.HttpMethodPost, reqDto)
    var response dto.SetCustomFieldsReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) SetCustomData (reqDto *dto.SetCustomDataReqDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/set-custom-data", constant.HttpMethodPost, reqDto)
    var response dto.SetCustomDataReqDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetCustomData (reqDto *dto.GetCustomDataDto) *dto.GetCustomDataRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-custom-data", constant.HttpMethodGet, reqDto)
    var response dto.GetCustomDataDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateResource (reqDto *dto.CreateResourceDto) *dto.ResourceRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-resource", constant.HttpMethodPost, reqDto)
    var response dto.CreateResourceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateResourcesBatch (reqDto *dto.CreateResourcesBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-resources-batch", constant.HttpMethodPost, reqDto)
    var response dto.CreateResourcesBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetResource (reqDto *dto.GetResourceDto) *dto.ResourceRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-resource", constant.HttpMethodGet, reqDto)
    var response dto.GetResourceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetResourcesBatch (reqDto *dto.GetResourcesBatchDto) *dto.ResourceListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-resources-batch", constant.HttpMethodGet, reqDto)
    var response dto.GetResourcesBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) ListResources (reqDto *dto.ListResourcesDto) *dto.ResourcePaginatedRespDto  {
    b, err := c.SendHttpRequest("/api/v3/list-resources", constant.HttpMethodGet, reqDto)
    var response dto.ListResourcesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateResource (reqDto *dto.UpdateResourceDto) *dto.ResourceRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-resource", constant.HttpMethodPost, reqDto)
    var response dto.UpdateResourceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteResource (reqDto *dto.DeleteResourceDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-resource", constant.HttpMethodPost, reqDto)
    var response dto.DeleteResourceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteResourcesBatch (reqDto *dto.DeleteResourcesBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-resources-batch", constant.HttpMethodPost, reqDto)
    var response dto.DeleteResourcesBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateNamespace (reqDto *dto.CreateNamespaceDto) *dto.ResourceDto  {
    b, err := c.SendHttpRequest("/api/v3/create-namespace", constant.HttpMethodPost, reqDto)
    var response dto.CreateNamespaceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) CreateNamespacesBatch (reqDto *dto.CreateNamespacesBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/create-namespaces-batch", constant.HttpMethodPost, reqDto)
    var response dto.CreateNamespacesBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetNamespace (reqDto *dto.GetNamespaceDto) *dto.NamespaceRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-namespace", constant.HttpMethodGet, reqDto)
    var response dto.GetNamespaceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetNamespacesBatch (reqDto *dto.GetNamespacesBatchDto) *dto.NamespaceListRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-namespaces-batch", constant.HttpMethodGet, reqDto)
    var response dto.GetNamespacesBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) UpdateNamespace (reqDto *dto.UpdateNamespaceDto) *dto.UpdateNamespaceRespDto  {
    b, err := c.SendHttpRequest("/api/v3/update-namespace", constant.HttpMethodPost, reqDto)
    var response dto.UpdateNamespaceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteNamespace (reqDto *dto.DeleteNamespaceDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-namespace", constant.HttpMethodPost, reqDto)
    var response dto.DeleteNamespaceDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) DeleteNamespacesBatch (reqDto *dto.DeleteNamespacesBatchDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/delete-namespaces-batch", constant.HttpMethodPost, reqDto)
    var response dto.DeleteNamespacesBatchDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) AuthorizeResources (reqDto *dto.AuthorizeResourcesDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/authorize-resources", constant.HttpMethodPost, reqDto)
    var response dto.AuthorizeResourcesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
func (c *Client) GetTargetAuthorizedResources (reqDto *dto.GetAuthorizedResourcesDto) *dto.IsSuccessRespDto  {
    b, err := c.SendHttpRequest("/api/v3/get-authorized-resources", constant.HttpMethodGet, reqDto)
    var response dto.GetAuthorizedResourcesDto
    if err != nil {
        return nil, err
    }
    json.Unmarshal(b, &response)
    return &response
}
