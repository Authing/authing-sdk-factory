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
    /// NamespaceListRespDto 的模型
    /// </summary>
    public partial class NamespaceListRespDto
    {
        /// <summary>
        ///  权限分组列表
        /// </summary>
        [JsonProperty("data")]
        public    List<NamespaceDto>   Data    {get;set;}
    }
}