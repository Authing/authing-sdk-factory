const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/csharp/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'https://console.authing.cn/openapi-json',
        output: './generated/csharp/src',
        exportCore: false,
        useOptions: true,
        lang: 'csharp',
    });
    execSync('cp -R generated/csharp/* ../authing-csharp-sdk/');
};

main().then(console.log).catch(console.error);
