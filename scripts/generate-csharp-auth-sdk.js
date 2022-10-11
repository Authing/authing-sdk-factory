const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');
fs.rmSync('./generated/csharp', { recursive: true, force: true });
fs.mkdirSync('./generated/csharp/src', { recursive: true });

const generateAuthenticationClient = async () => {
    await generate({
        input: 'http://localhost:3000/auth-openapi-json',
        output: './generated/csharp/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
        lang: 'csharp',
    });
    const authMethodsContent = fs.readFileSync('./generated/csharp/src/AuthMethods.cs');
    // fs.unlinkSync('./generated/csharp/src/AuthMethods.cs');
    execSync(
        'cp -R generated/csharp/src/models/* ../authing-csharp-sdk/Authing.CSharp.SDK/Authing.CSharp.SDK/Models/Authentication',
        { encoding: 'utf-8' }
    );

    // 替换原来 Authing.ts 中的内容
    const authingTsFile =
        '../authing-csharp-sdk/Authing.CSharp.SDK/Authing.CSharp.SDK/Services/AuthenticationClient.cs';
    const originalAuthingTsContent = fs.readFileSync(authingTsFile, 'utf-8');
    fs.writeFileSync(
        authingTsFile,
        originalAuthingTsContent.replace(
            new RegExp(
                '/// ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====(\n|.)*?/// ==== AUTO GENERATED AUTHENTICATION METHODS END ===='
            ),
            '/// ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====' +
                '\n' +
                authMethodsContent +
                '\n' +
                '/// ==== AUTO GENERATED AUTHENTICATION METHODS END ===='
        )
    );
};

generateAuthenticationClient().then(console.log).catch(console.error);
