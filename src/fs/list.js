import fsPromise from 'fs/promises';
import fs from 'fs';
import path from 'path';

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __dirname = path.resolve();
const folderName = path.join(__dirname, 'files');
let counter = 0;

async function checkFolderExists() {
    try {
        const stat = await fsPromise.stat(folderName);
        if (stat) {
            return true;
        }
    } catch (error) {
        return false;
    }
}

async function listFiles() {
    fs.readdir(folderName, (err, files) => {
        if (err) {
            throw new Error(fsOperationFailed);
        } else {
            files.forEach(file => {
                let curFile = path.join(folderName, file);

                fs.stat(curFile, function (err, stats) {
                    if (stats.isFile()) {
                        if (!counter) {
                            sendMessage('List of files');
                            } 
                        counter++;
                        console.log(`${counter}. ${path.basename(curFile)}`);
                    }
                })
            });
        }
    })

}

export const list = async () => {
    const folderNameExists = await checkFolderExists();
    if (folderNameExists) {
        await listFiles();
    } else {
        throw new Error(fsOperationFailed);
    }
};

list();