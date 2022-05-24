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
    /// SetUserDepartmentsDto 的模型
    /// </summary>
    public partial class SetUserDepartmentsDto
    {
        /// <summary>
        ///  部门信息
        /// </summary>
        [JsonProperty("departments")]
        public    List<SetUserDepartmentDto>   Departments    {get;set;}
        /// <summary>
        ///  用户 ID
        /// </summary>
        [JsonProperty("userId")]
        public    string   UserId    {get;set;}
    }
}