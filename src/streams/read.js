import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { streamOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
    const fileName = path.join(__dirname, 'files/fileToRead.txt');

    sendMessage('File output start');
    const readStream = fs.createReadStream(fileName, 'utf-8');

    readStream.on('data', chunk => process.stdout.write(chunk));
    readStream.on('end', () => sendMessage('File output end'));
    readStream.on('error', () => { throw new Error(streamOperationFailed)});
};

read();