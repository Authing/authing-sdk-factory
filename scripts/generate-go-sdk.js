const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/go/src', { recursive: true });

const generateManagementClient = async () => {
    await generate({
        input: 'http://localhost:3000/openapi-json',
        output: './generated/go/src',
        exportCore: false,
        lang: 'go',
    });
    execSync('cp -R generated/go/src/models/* ../authing-golang-sdk/dto', { encoding: 'utf-8' });
    execSync('cp -R generated/go/src/management_client.go ../authing-golang-sdk/management/management_client.go', {
        encoding: 'utf-8',
    });
};

const generateAuthenticationClient = async () => {
    await generate({
        input: 'http://localhost:3000/auth-openapi-json',
        output: './generated/go/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
        lang: 'go',
    });
    const authMethodsContent = fs.readFileSync('./generated/go/src/AuthMethods.go');
    fs.unlinkSync('./generated/go/src/AuthMethods.go');

    execSync('cp -R generated/go/src/models/* ../authing-golang-sdk/dto', { encoding: 'utf-8' });

    // 替换原来 Authing.ts 中的内容
    const authingTsFile = '../authing-golang-sdk/authentication/authentication_client.go';
    const originalAuthingTsContent = fs.readFileSync(authingTsFile, 'utf-8');
    fs.writeFileSync(
        authingTsFile,
        originalAuthingTsContent.replace(
            new RegExp(
                '// ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====(\n|.)*?// ==== AUTO GENERATED AUTHENTICATION METHODS END ===='
            ),
            '// ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====' +
                '\n' +
                authMethodsContent +
                '\n' +
                '// ==== AUTO GENERATED AUTHENTICATION METHODS END ===='
        )
    );
};

generateManagementClient().then(console.log).catch(console.error);
generateAuthenticationClient().then(console.log).catch(console.error);
