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
    /// CreateUserOptionsDto 的模型
    /// </summary>
    public partial class CreateUserOptionsDto
    {
        /// <summary>
        ///  该参数一般在迁移旧有用户数据到 Authing 的时候会设置。开启这个开关，password 字段会直接写入 Authing 数据库，Authing 不会再次加密此字段。如果你的密码不是明文存储，你应该保持开启，并编写密码函数计算。
        /// </summary>
        [JsonProperty("keepPassword")]
        public    bool   KeepPassword    {get;set;}
        /// <summary>
        ///  是否强制要求用户在第一次的时候重置密码
        /// </summary>
        [JsonProperty("resetPasswordOnFirstLogin")]
        public    bool   ResetPasswordOnFirstLogin    {get;set;}
        /// <summary>
        ///  此次调用中使用的父部门 ID 的类型
        /// </summary>
        [JsonProperty("departmentIdType")]
        public    CreateUserOptionsDto.departmentIdType   DepartmentIdType    {get;set;}
    }
    public partial class CreateUserOptionsDto
    {
        /// <summary>
        ///  此次调用中使用的父部门 ID 的类型
        /// </summary>
        public enum departmentIdType
        {
            [EnumMember(Value="department_id")]
            DEPARTMENT_ID,
            [EnumMember(Value="open_department_id")]
            OPEN_DEPARTMENT_ID,
        }
    }
}