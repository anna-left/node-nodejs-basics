import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
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
        sendMessage('File was created');
    }
};

create();