import { rename as renameFS } from 'fs'; 
import fsPromise from 'fs/promises';
import path from 'path';

import { fsOperationFailed, sendMessage } from './globalFunctions.js';

const __dirname = path.resolve();
const oldFileName = path.join(__dirname, 'files/wrongFilename.txt');
const newFileName = path.join(__dirname, 'files/properFilename.md');

async function checkFileExists(fileName) {
    try {
        const stat = await fsPromise.stat(fileName);
        if (stat) {
            return true;
        }
    } catch (error) {
        return false;
    }
}

export const rename = async () => {
    const oldFileNameExists = await checkFileExists(oldFileName);
    const newFileNameExists = await checkFileExists(newFileName);
    if (!oldFileNameExists || newFileNameExists) {
        throw new Error(fsOperationFailed);
    } else {
        renameFS(oldFileName, newFileName, (err) => {
            if (err) throw err;
        });
        sendMessage('Files has been renamed');
    }
};

rename();