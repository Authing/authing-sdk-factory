const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/php/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'https://console.authing.cn/openapi-json',
        output: './generated/php/src',
        exportCore: false,
        useOptions: true,
        lang: 'php',
    });
    // execSync('cp -R generated/php/* ../authing-php-sdk/', { encoding: 'utf-8' });
};

main().then(console.log).catch(console.error);
