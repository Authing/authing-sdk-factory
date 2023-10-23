const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');
fs.rmSync('./generated/web', { recursive: true, force: true });
fs.mkdirSync('./generated/web/src', { recursive: true });

const generateAuthenticationClient = async () => {
    await generate({
        input: 'http://localhost:3888/auth-openapi-json',
        output: './generated/web/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
        lang: 'web',
    });
    const files = fs.readdirSync('./generated/web/src/models');
    fs.writeFileSync(
        './generated/web/src/models/index.ts',
        files.map(file => `export * from './${file.replace(/\.ts$/, '')}';`).join('\n')
    );

    const authMethodsContent = fs.readFileSync('./generated/web/src/AuthMethods.ts');
    const authImportsContent = fs.readFileSync('./generated/web/src/AuthImports.ts');
    fs.unlinkSync('./generated/web/src/AuthMethods.ts');
    fs.unlinkSync('./generated/web/src/AuthImports.ts');

    execSync('cp -R generated/web/src/models/* ../authing-js-sdk/packages/web/src/models', {
        encoding: 'utf-8',
    });

    // 替换原来 Authing.ts 中的内容
    const authingTsFile = '../authing-js-sdk/packages/web/src/Authing.ts';
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

generateAuthenticationClient().then(console.log).catch(console.error);
