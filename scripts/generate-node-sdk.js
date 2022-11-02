const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.rmSync('./generated/typescript', { recursive: true, force: true });
fs.mkdirSync('./generated/typescript/src', { recursive: true });

const generateManagementClient = async () => {
    await generate({
        input: 'http://localhost:3000/openapi-json',
        output: './generated/typescript/src',
        exportCore: false,
        useOptions: true,
    });
    const files = fs.readdirSync('./generated/typescript/src/models');
    fs.writeFileSync(
        './generated/typescript/src/models/index.ts',
        files.map(file => `export * from './${file.replace(/\.ts$/, '')}';`).join('\n')
    );
    execSync('cp -R generated/typescript/* ../authing-node-sdk/', { encoding: 'utf-8' });
};

const generateAuthenticationClient = async () => {
    const originalManagementModelFiles = fs.readdirSync('./generated/typescript/src/models');
    await generate({
        input: 'http://localhost:3000/auth-openapi-json',
        output: './generated/typescript/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
    });
    const files = fs.readdirSync('./generated/typescript/src/models');
    fs.writeFileSync(
        './generated/typescript/src/models/index.ts',
        files
            .concat(originalManagementModelFiles)
            .map(file => `export * from './${file.replace(/\.ts$/, '')}';`)
            .join('\n')
    );

    const authMethodsContent = fs.readFileSync('./generated/typescript/src/AuthMethods.ts');
    const authImportsContent = fs.readFileSync('./generated/typescript/src/AuthImports.ts');
    fs.unlinkSync('./generated/typescript/src/AuthMethods.ts');
    fs.unlinkSync('./generated/typescript/src/AuthImports.ts');

    execSync('cp -R generated/typescript/* ../authing-node-sdk/', { encoding: 'utf-8' });

    // 替换原来 Authing.ts 中的内容
    const authingTsFile = '../authing-node-sdk/src/AuthenticationClient.ts';
    const originalAuthingTsContent = fs.readFileSync(authingTsFile, 'utf-8');
    fs.writeFileSync(
        authingTsFile,
        originalAuthingTsContent
            .replace(
                new RegExp(
                    '// ==== AUTO GENERATED AUTHENTICATION IMPORTS BEGIN ====(\n|.)*?// ==== AUTO GENERATED AUTHENTICATION IMPORTS END ===='
                ),
                '// ==== AUTO GENERATED AUTHENTICATION IMPORTS BEGIN ====' +
                    '\n' +
                    authImportsContent +
                    '\n' +
                    '// ==== AUTO GENERATED AUTHENTICATION IMPORTS END ===='
            )
            .replace(
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

generateManagementClient().then(generateAuthenticationClient).catch(console.error);
