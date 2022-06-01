import fs from 'fs';
import fsPromise from 'fs/promises';
import path from 'path';

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __dirname = path.resolve();
const fileName = path.join(__dirname, 'files/fileToRead.txt');

async function checkFileExists() {
    try {
        const stat = await fsPromise.stat(fileName);
        if (stat) {
            return true;
        }
    } catch (error) {
        return false;
    }
}
export const read = async () => {
    const fileNameExists = await checkFileExists();
    if (fileNameExists) {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                throw new Error(fsOperationFailed);
            } else {
                sendMessage('content of the file ToRead.txt');
                console.log(data)
            };
        });

    } else {
        throw new Error(fsOperationFailed);
    }
};

read();