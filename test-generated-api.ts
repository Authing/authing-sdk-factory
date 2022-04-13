import { ManagementClient } from './generated/typescript/src';

const m = new ManagementClient({
    userPoolId: '623c390f840bb446d53fc539',
    secret: '20df4d1528146546f820ec5dfb7060f7',
    host: 'https://console.cj.mereith.com',
});

const main = async () => {
    const data = await m.users.getUser({
        userId: 'xxx',
    });
    console.log(data);
};

main().then(console.log).catch(console.error);
