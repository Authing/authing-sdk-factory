import { ManagementClient } from './generated/typescript/src';

const m = new ManagementClient({
    userPoolId: '624d8f0796b12035d0dfc10e',
    secret: '2bd8fbefcafd9c59ec2a1d5caf9b0337',
    host: 'http://localhost:3000',
});

const main = async () => {
    const data = await m.getUser({
        userId: '62559df6b27c98259877b5f4',
    });
    console.log(data);
};

main().then(console.log).catch(console.error);
