# Authing SDK Factory

## 安装使用

基础要求：

-   Node.js： 16.x
-   Yarn
-   Python （如需生成对应 sdk）

```bash
# 安装依赖
yarn
yarn build
# 生成所有 SDK
yarn generate

# 生成单个 SDK
yarn generate:node
yarn generate:java
yarn generate:python
yarn generate:csharp
```

配置： `scripts/generate-XXX-sdk.js`

修改 OPEN API 链接： `https://console.authing.cn/openapi-json`

## 修改模板

目录： `src/templates/XXX`

模板语言使用的是 [Handlebars](https://handlebarsjs.com/)

修改完模板后执行生成： `yarn build` 再进行 SDK 生成。
