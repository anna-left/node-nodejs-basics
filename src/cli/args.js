import { sendMessage } from '../global/globalFunctions.js';

export const parseArgs = () => {
    sendMessage('Command line arguments');
    const argv = process.argv;
    for (let key in argv) {
        console.log(`prop${key}Name is ${argv[key]}`);
    }
};

parseArgs();