const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/java/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'https://console.authing.cn/openapi-json',
        output: './generated/java/src',
        exportCore: false,
        lang: 'java',
    });
    // execSync('cp -R generated/java/src/models/* ../authing-java-sdk/src/main/java/dto', { encoding: 'utf-8' });
    // execSync(
    //     'cp -R generated/java/src/ManagementClient.java ../authing-java-sdk/src/main/java/client/ManagementClient.java'
    //     , { encoding: 'utf-8' }
    // );
};

main().then(console.log).catch(console.error);
