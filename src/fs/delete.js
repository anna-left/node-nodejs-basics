import { unlink } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileName = path.join(__dirname, 'files/fileToRemove.txt');

export const remove = async () => {
    unlink(fileName, (err) => {
        if (err) throw new Error(fsOperationFailed);
        sendMessage('File was deleted');
    });
};

remove();