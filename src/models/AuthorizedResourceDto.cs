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
    /// AuthorizedResourceDto 的模型
    /// </summary>
    public partial class AuthorizedResourceDto
    {
        /// <summary>
        ///  资源标识符
        /// </summary>
        [JsonProperty("resourceCode")]
        public    string   ResourceCode    {get;set;}
        /// <summary>
        ///  资源类型
        /// </summary>
        [JsonProperty("resourceType")]
        public    AuthorizedResourceDto.resourceType   ResourceType    {get;set;}
        /// <summary>
        ///  被授权的资源的操作列表
        /// </summary>
        [JsonProperty("actions")]
        public    List<string>   Actions    {get;set;}
        /// <summary>
        ///  资源对应的 API Identifier
        /// </summary>
        [JsonProperty("apiIdentifier")]
        public    string   ApiIdentifier    {get;set;}
    }
    public partial class AuthorizedResourceDto
    {
        /// <summary>
        ///  资源类型
        /// </summary>
        public enum resourceType
        {
            [EnumMember(Value="DATA")]
            DATA,
            [EnumMember(Value="API")]
            API,
            [EnumMember(Value="MENU")]
            MENU,
            [EnumMember(Value="BUTTON")]
            BUTTON,
        }
    }
}