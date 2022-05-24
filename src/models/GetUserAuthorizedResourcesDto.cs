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
    /// GetUserAuthorizedResourcesDto 的模型
    /// </summary>
    public partial class GetUserAuthorizedResourcesDto
    {
        /// <summary>
        ///  用户 ID
        /// </summary>
        [JsonProperty("userId")]
        public    object   UserId    {get;set;}
        /// <summary>
        ///  所属权限分组的 code
        /// </summary>
        [JsonProperty("namespace")]
        public    object   Namespace    {get;set;}
        /// <summary>
        ///  资源类型
        /// </summary>
        [JsonProperty("resourceType")]
        public    object   ResourceType    {get;set;}
    }
}