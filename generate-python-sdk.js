const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('./dist');

fs.mkdirSync('./generated/python/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'http://localhost:3000/openapi-json',
        output: './generated/python/src',
        exportCore: false,
        lang: 'python',
        exportModels: false,
    });
    execSync('cp -R generated/python/src/* ../authing-py-sdk/authing');
};

main().then(console.log).catch(console.error);
