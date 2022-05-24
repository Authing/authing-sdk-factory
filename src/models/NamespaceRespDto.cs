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
    /// NamespaceRespDto 的模型
    /// </summary>
    public partial class NamespaceRespDto
    {
        /// <summary>
        ///  权限分组详情
        /// </summary>
        [JsonProperty("data")]
        public    NamespaceDto   Data    {get;set;}
    }
}