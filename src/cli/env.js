import { sendMessage } from '../global/globalFunctions.js';

export const parseEnv = () => {
    let env = process.env;

    env['RSS_1.NAME'] = 'The Rolling Scopes School';
    env['RSS_2.COURSE'] = 'Node.js';
    env['RSS_3.TASK'] = 'Node.js basics';
    env['RSS_4.STUDENT'] = 'anna_left';
    env['RSS_5.SCORE'] = '206 :-)';
    sendMessage('Environment variables with prefix RSS_');
    
    for (let key in env) {
        if (key.indexOf('RSS_') === 0) {
            console.log(`${key} === ${env[key]}`);
        }
        
    }
};

parseEnv();
