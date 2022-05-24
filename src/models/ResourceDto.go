package dto


type ResourceDto struct{
    Code String `json:"code,omitempty"`;
    Description String `json:"description,omitempty"`;
    Type Type `json:"type,omitempty"`;
    Actions List<ResourceAction> `json:"actions,omitempty"`;
    ApiIdentifier String `json:"apiIdentifier,omitempty"`;
    Namespace String `json:"namespace,omitempty"`;
}

/**
 * 资源类型，如数据、API、按钮、菜单
 */
type  Type string

const (
    Data DATA = "DATA"
    Api API = "API"
    Menu MENU = "MENU"
    Button BUTTON = "BUTTON"
)
