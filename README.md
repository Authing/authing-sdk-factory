# Authing SDK Factory

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align="center">
    <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
    <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**English** | [简体中文](./README.zh_CN.md)


## Install

Basic requirements:

-   Node.js： 16.x
-   Yarn
-   Python (To generate the corresponding sdk)

```bash
# Installing dependencies
yarn
yarn build
# Generate all SDKs
yarn generate

# Generate a single SDK
yarn generate:node
yarn generate:java
yarn generate:python
yarn generate:csharp
yarn generate:go
```

Configuration: `scripts/generate-XXX-sdk.js`

Modify OPEN API link: `https://console.authing.cn/openapi-json`

## Modify template

Catalog: `src/templates/XXX`

The template language used is [Handlebars](https://handlebarsjs.com/)

After modifying the template, execute the following generation. `yarn build` and then do the SDK generation.

## Questions

For questions and support please use the [official forum](https://forum.authing.cn/). The issue list of this repo is exclusively for bug reports and feature requests.

## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request
## Contribute

https://github.com/Authing/.github/blob/main/CONTRIBUTING.md#English


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Authing
