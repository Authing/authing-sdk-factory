const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/go/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'https://console.authing.cn/openapi-json',
        output: './generated/go/src',
        exportCore: false,
        lang: 'go',
    });
    // execSync('cp -R generated/go/src/dto/* ../authing-go-sdk/src/main/java/dto');
    // execSync(
    //     'cp -R generated/java/src/ManagementClient.java ../authing-java-sdk/src/main/java/client/ManagementClient.java'
    // );
};

main().then(console.log).catch(console.error);
