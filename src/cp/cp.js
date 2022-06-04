import cp from 'child_process';

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

export const spawnChildProcess = async (args) => {
    const child = cp.spawn('node', ['./files/script.js', 'arg1', 'arg2']);
    sendMessage('Creating a child process');
    child.stdin.setEncoding('utf-8');
    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
};

spawnChildProcess();