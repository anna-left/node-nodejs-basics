import { sendMessage } from '../global/globalFunctions.js';

export const parseEnv = () => {
    const env = process.env;

    env['RSS_1.NAME'] = 'The Rolling Scopes School';
    env['RSS_2.COURSE'] = 'Node.js';
    env['RSS_3.TASK'] = 'Node.js basics';
    env['RSS_4.STUDENT'] = 'anna_left';
    env['RSS_5.SCORE'] = '206 :-)';

    const argv = process.argv;

    let curFlag = '';
    for (let key in argv) {
        if (argv[key].indexOf('--')) {
            if (curFlag) {
                if (!curFlag.indexOf('RSS_')) {
                    env[curFlag] = argv[key];
                }
                
            }
            curFlag = '';
        } else {
            curFlag = argv[key].slice(2);
        }
    }

    sendMessage('Environment variables with prefix RSS_');
    
    for (let key in env) {
        if (!key.indexOf('RSS_')) {
            console.log(`${key} = ${env[key]}`);
        }
        
    }
};

parseEnv();
