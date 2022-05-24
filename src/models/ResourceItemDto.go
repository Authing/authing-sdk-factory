package dto


type ResourceItemDto struct{
    Code String `json:"code,omitempty"`;
    Actions List<String> `json:"actions,omitempty"`;
    ResourceType ResourceType `json:"resourceType,omitempty"`;
}

/**
 * 资源类型，如数据、API、按钮、菜单
 */
type  ResourceType string

const (
    Data DATA = "DATA"
    Api API = "API"
    Menu MENU = "MENU"
    Button BUTTON = "BUTTON"
)
