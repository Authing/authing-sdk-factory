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
    /// CreateOrganizationReqDto 的模型
    /// </summary>
    public partial class CreateOrganizationReqDto
    {
        /// <summary>
        ///  组织名称
        /// </summary>
        [JsonProperty("organizationName")]
        public    string   OrganizationName    {get;set;}
        /// <summary>
        ///  组织 code
        /// </summary>
        [JsonProperty("organizationCode")]
        public    string   OrganizationCode    {get;set;}
        /// <summary>
        ///  根节点自定义 ID
        /// </summary>
        [JsonProperty("openDepartmentId")]
        public    string   OpenDepartmentId    {get;set;}
    }
}