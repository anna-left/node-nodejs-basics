import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileName = path.normalize(path.join(__dirname, 'files/fresh.txt'));
const myText = 'I am fresh and young'

async function createFile() {
    try {
        await fs.writeFile(
            fileName,
            myText,
            {
                encoding: "utf8",
                flag: "wx"
            },
        )
    } catch (error) {
        throw new Error(fsOperationFailed);
    }
}

export const create = async () => {
    await createFile();
    sendMessage('File was created');
};

create();