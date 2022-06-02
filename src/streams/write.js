import fs from 'fs';
import path from 'path';

import { sendMessage } from '../global/globalFunctions.js';

export const write = async () => {
    const __dirname = path.resolve();
    const fileName = path.join(__dirname, 'files/fileToWrite.txt');
    const writeStream = fs.createWriteStream(fileName);

    sendMessage('Please enter data');

    process.stdin.on('data', data => {
        writeStream.write(data.toString());
        sendMessage('File written');
        process.exit();
    });


};

write();