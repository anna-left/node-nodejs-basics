import { unlink } from 'fs';
import fsPromise from 'fs/promises';
import path from 'path';

import { fsOperationFailed, sendMessage } from './globalFunctions.js';

const __dirname = path.resolve();
const fileName = path.join(__dirname, 'files/fileToRemove.txt');

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

export const remove = async () => {
    const fileExists = await checkFileExists();
    if (fileExists) {
        unlink(fileName, (err) => {
            if (err) throw err;
            sendMessage('File was deleted');
        });
        
    } else {
        throw new Error(fsOperationFailed);
    }
    
};

remove();