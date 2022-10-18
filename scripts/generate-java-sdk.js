const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.rmSync('./generated/java', { recursive: true, force: true });
fs.mkdirSync('./generated/java/src', { recursive: true });

const generateManagementClient = async () => {
    await generate({
        input: 'http://8.142.39.176:3000/openapi-json',
        output: './generated/java/src',
        exportCore: false,
        lang: 'java',
    });
    execSync('cp -R generated/java/src/models/* ../authing-java-sdk/src/main/java/cn/authing/sdk/java/dto/', {
        encoding: 'utf-8',
    });
    execSync(
        'cp -R generated/java/src/ManagementClient.java ../authing-java-sdk/src/main/java/cn/authing/sdk/java/client/ManagementClient.java',
        { encoding: 'utf-8' }
    );
};

const generateAuthenticationClient = async () => {
    await generate({
        input: 'http://localhost:3000/auth-openapi-json',
        output: './generated/java/src',
        exportCore: false,
        useOptions: true,
        isAuthClient: true,
        lang: 'java',
    });
    const authMethodsContent = fs.readFileSync('./generated/java/src/AuthMethods.java', 'utf-8');
    fs.unlinkSync('./generated/java/src/AuthMethods.java');

    execSync('cp -R generated/java/src/models/* ../authing-java-sdk/src/main/java/cn/authing/sdk/java/dto/', {
        encoding: 'utf-8',
    });
    const authingTsFile = '../authing-java-sdk/src/main/java/cn/authing/sdk/java/client/AuthenticationClient.java';
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
// generateAuthenticationClient().then(console.log).catch(console.error);
