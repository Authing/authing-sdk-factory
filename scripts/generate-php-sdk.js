const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.rmSync('./generated/php', { recursive: true, force: true });
fs.mkdirSync('./generated/php/src', { recursive: true });

const generateManagementClient = async () => {
    await generate({
        input: 'http://localhost:3000/openapi-json',
        output: './generated/php/src',
        exportCore: false,
        useOptions: true,
        lang: 'php',
        exportModels: false,
    });
    execSync('cp -R generated/php/* ../../authing-php-sdk/', { encoding: 'utf-8' });
};

const generateAuthenticationClient = async () => {
    await generate({
        input: 'http://localhost:3000/auth-openapi-json',
        output: './generated/php/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
        exportModels: false,
        lang: 'php',
    });

    const authMethodsContent = fs.readFileSync('./generated/php/src/AuthMethods.php', 'utf-8');
    fs.unlinkSync('./generated/php/src/AuthMethods.php');
    // 替换原来 Authing.ts 中的内容
    const authingTsFile = '../../authing-php-sdk/src/AuthenticationClient.php';
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
