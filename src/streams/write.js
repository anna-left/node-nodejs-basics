import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = path.join(__dirname, 'files/fileToWrite.txt');

export const write = async () => {
    
    const writeStream = fs.createWriteStream(fileName);

    sendMessage('Please enter data');

    process.stdin.on('data', data => {
        writeStream.write(data.toString());
        sendMessage('File written');
        process.exit();
    });

};

write();