import cp from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileName = path.normalize(path.join(__dirname, 'files/script.js'));

export const spawnChildProcess = async (args) => {
    const child = cp.spawn('node', [fileName, 'arg1', 'arg2']);
    sendMessage('Creating a child process');
    child.stdin.setEncoding('utf-8');
    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
};

spawnChildProcess();