const { execSync } = require('child_process');
const fs = require('fs');
const { generate } = require('../dist');

fs.mkdirSync('./generated/csharp/src', { recursive: true });

const main = async () => {
    await generate({
        input: 'http://8.142.39.176:3000/openapi-json',
        output: './generated/csharp/src',
        exportCore: false,
        useOptions: true,
        lang: 'csharp',
    });
    execSync(
        'cp -R generated/csharp/src/ManagementClient.cs ../authing-csharp-sdk/Authing.CSharp.SDK/Authing.CSharp.SDK/Services',
        { encoding: 'utf-8' }
    );
    execSync(
        'cp -R generated/csharp/src/models/* ../authing-csharp-sdk/Authing.CSharp.SDK/Authing.CSharp.SDK/Models/Management',
        {
            encoding: 'utf-8',
        }
    );
};

main().then(console.log).catch(console.error);
