package dto


type AuthorizedResourceDto struct{
    ResourceCode String `json:"resourceCode,omitempty"`;
    ResourceType ResourceType `json:"resourceType,omitempty"`;
    Actions List<String> `json:"actions,omitempty"`;
    ApiIdentifier String `json:"apiIdentifier,omitempty"`;
}

/**
 * 资源类型
 */
type  ResourceType string

const (
    Data DATA = "DATA"
    Api API = "API"
    Menu MENU = "MENU"
    Button BUTTON = "BUTTON"
)
