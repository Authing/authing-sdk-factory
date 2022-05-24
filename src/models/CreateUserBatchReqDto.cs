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
    /// CreateUserBatchReqDto 的模型
    /// </summary>
    public partial class CreateUserBatchReqDto
    {
        /// <summary>
        ///  批量用户
        /// </summary>
        [JsonProperty("list")]
        public    List<CreateUserInfoDto>   List    {get;set;}
        /// <summary>
        ///  附加选项
        /// </summary>
        [JsonProperty("options")]
        public    CreateUserOptionsDto   Options    {get;set;}
    }
}