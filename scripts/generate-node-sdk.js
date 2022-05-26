const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/typescript/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'https://console.authing.cn/openapi-json',
        output: './generated/typescript/src',
        exportCore: false,
        useOptions: true,
    });
    const files = fs.readdirSync('./generated/typescript/src/models');
    fs.writeFileSync(
        './generated/typescript/src/models/index.ts',
        files.map(file => `export * from './${file}';`).join('\n')
    );
    // execSync('cp -R generated/typescript/* ../authing-node-sdk/', { encoding: 'utf-8' });
};

main().then(console.log).catch(console.error);
