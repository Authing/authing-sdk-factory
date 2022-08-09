# Authing SDK Factory

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align="center">
    <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
    <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**简体中文** | [English](./README.md)


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
yarn generate:go
```

配置： `scripts/generate-XXX-sdk.js`

修改 OPEN API 链接： `https://console.authing.cn/openapi-json`

## 修改模板

目录： `src/templates/XXX`

模板语言使用的是 [Handlebars](https://handlebarsjs.com/)

修改完模板后执行生成： `yarn build` 再进行 SDK 生成。

## 常见问题

如果需要在线技术支持，可访问[官方论坛](https://forum.authing.cn/). 此仓库的 issue 仅用于上报 Bug 和提交新功能特性。

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## 贡献

https://github.com/Authing/.github/blob/main/CONTRIBUTING.md


## 开源许可

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Authing

