const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/python/src', { recursive: true });

const generateAuthenticationClient = async () => {
    await generate({
        input: 'http://localhost:3000/auth-openapi-json',
        output: './generated/python/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
        exportModels: false,
        lang: 'python',
    });

    const authMethodsContent = fs.readFileSync('./generated/python/src/AuthMethods.py', 'utf-8');
    // fs.unlinkSync('./generated/typescript/src/AuthMethods.py');
    // 替换原来 Authing.ts 中的内容
    const authingTsFile = '../authing-py-sdk/authing/AuthenticationClient.py';
    const originalAuthingTsContent = fs.readFileSync(authingTsFile, 'utf-8');
    fs.writeFileSync(
        authingTsFile,
        originalAuthingTsContent.replace(
            new RegExp(
                '# ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====(\n|.)*?# ==== AUTO GENERATED AUTHENTICATION METHODS END ===='
            ),
            '# ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====' +
                '\n' +
                authMethodsContent +
                '\n' +
                '# ==== AUTO GENERATED AUTHENTICATION METHODS END ===='
        )
    );
};

generateAuthenticationClient().then(console.log).catch(console.error);
