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
    /// SearchDepartmentsReqDto 的模型
    /// </summary>
    public partial class SearchDepartmentsReqDto
    {
        /// <summary>
        ///  搜索关键词
        /// </summary>
        [JsonProperty("search")]
        public    string   Search    {get;set;}
        /// <summary>
        ///  组织 code
        /// </summary>
        [JsonProperty("organizationCode")]
        public    string   OrganizationCode    {get;set;}
    }
}