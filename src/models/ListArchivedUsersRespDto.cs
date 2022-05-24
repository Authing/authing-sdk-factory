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
    /// ListArchivedUsersRespDto 的模型
    /// </summary>
    public partial class ListArchivedUsersRespDto
    {
        /// <summary>
        ///  用户 ID
        /// </summary>
        [JsonProperty("userId")]
        public    string   UserId    {get;set;}
    }
}