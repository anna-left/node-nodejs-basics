import path from 'path';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

import { sendMessage } from '../global/globalFunctions.js';

export const decompress = async () => {
    const __dirname = path.resolve();
    const fileName = path.join(__dirname, 'files/fileToCompress.txt');
    const fileArchiveName = path.join(__dirname, 'files/archive.gz');
    const gzip = createUnzip();
    const readStream = createReadStream(fileArchiveName);
    const writeStream = createWriteStream(fileName);

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        } else {
            sendMessage('File is decompressed');
        }
    });
};

decompress();