import fs from 'fs';
import path from 'path';

import { streamOperationFailed, sendMessage } from '../global/globalFunctions.js';

export const read = async () => {
    const __dirname = path.resolve();
    const fileName = path.join(__dirname, 'files/fileToRead.txt');

    sendMessage('File output start');
    const readStream = fs.createReadStream(fileName, 'utf-8');

    readStream.on('data', chunk => process.stdout.write(chunk));
    readStream.on('end', () => sendMessage('File output end'));
    readStream.on('error', error => { throw new Error(streamOperationFailed)});
};

read();