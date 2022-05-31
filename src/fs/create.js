import fs from 'fs/promises';
import path from 'path';

import { fsOperationFailed, sendMessage } from './globalFunctions.js';

const __dirname = path.resolve();
const fileName = path.normalize(path.join(__dirname, 'files/fresh.txt'));
const myText = 'I am fresh and young'

async function checkFileExists() {
    try {
        return await fs.stat(fileName);
    } catch (error) {
        return false;
    }
}

async function createFile() {
    try {
        await fs.writeFile(fileName, myText);
    } catch (error) {
        throw new Error(fsOperationFailed);
    }
}

export const create = async () => {
    const fileExists = await checkFileExists();
    if (fileExists) {
        throw new Error(fsOperationFailed);
    } else {
        await createFile();
        sendMessage('The file has been created');
    }
};

create();