using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace Authing.SDK.V3.Models
{
    /// <summary>
    /// OrganizationDto 的模型
    /// </summary>
    public partial class OrganizationDto
    {
        /// <summary>
        ///  组织 code
        /// </summary>
        [JsonProperty("organizationCode")]
        public    string   OrganizationCode    {get;set;}
        /// <summary>
        ///  组织名称
        /// </summary>
        [JsonProperty("organizationName")]
        public    string   OrganizationName    {get;set;}
        /// <summary>
        ///  根节点 ID
        /// </summary>
        [JsonProperty("departmentId")]
        public    string   DepartmentId    {get;set;}
        /// <summary>
        ///  根节点自定义 ID
        /// </summary>
        [JsonProperty("openDepartmentId")]
        public    string   OpenDepartmentId    {get;set;}
        /// <summary>
        ///  是否包含子节点
        /// </summary>
        [JsonProperty("hasChildren")]
        public    bool   HasChildren    {get;set;}
        /// <summary>
        ///  部门负责人 ID
        /// </summary>
        [JsonProperty("leaderUserId")]
        public    string   LeaderUserId    {get;set;}
        /// <summary>
        ///  部门人数
        /// </summary>
        [JsonProperty("membersCount")]
        public    long   MembersCount    {get;set;}
    }
}