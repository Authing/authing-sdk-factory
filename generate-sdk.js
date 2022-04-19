const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('./dist');

fs.mkdirSync('./generated/typescript/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'https://core.authing.cn/openapi-json',
        output: './generated/typescript/src',
        exportCore: false,
    });
    execSync('cp -R templates/node/* generated/typescript/');
    execSync('cp -R templates/node/.github generated/typescript/.github');
    execSync('cp -R generated/typescript/* ../authing-node-sdk/');
};

main().then(console.log).catch(console.error);
