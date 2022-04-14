const { generate } = require('./dist');

const main = async () => {
    await generate({
        input: 'http://localhost:3000/openapi-json',
        output: './generated/typescript/src',
        exportCore: false,
    });
};

main().then(console.log).catch(console.error);
