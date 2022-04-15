const { generate } = require('./dist');

const main = async () => {
    await generate({
        input: 'https://core.authing.cn/openapi-json',
        output: './generated/typescript/src',
        exportCore: false,
    });
};

main().then(console.log).catch(console.error);
