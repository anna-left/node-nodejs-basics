import { sendMessage } from '../global/globalFunctions.js';

export const parseArgs = () => {
    sendMessage('Command line arguments');
    const argv = process.argv;

    let curFlag = '';
    for (let key in argv) {
        if (argv[key].indexOf('--')) {
            if (curFlag) {
                console.log(`${curFlag} is ${argv[key]}`);
            }
            curFlag = '';
        } else {
            curFlag = argv[key].slice(2);
        }
    }
};

parseArgs();