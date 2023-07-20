import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';


const projectId = '';   // <---------- your Infura Project ID

const projectSecret = '';  // <---------- your Infura Secret

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const ipfs = create({
    host: 'infura-ipfs.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

// const ipfs = create({ url: infuraAPI, headers: { authorization: `Bearer ${infuraAPIKey}` } });


// import { ThirdwebStorage } from '@thirdweb-dev/storage';

// const ipfs = new ThirdwebStorage({
//     apiUrl: 'https://ipfs.infura.io:5001', // Replace with the appropriate API URL
//     apiKey: '2Qv6VYKxtPQgSd8keQNU1BjwGCP', // Replace with your Infura API key
// });

export default ipfs;
