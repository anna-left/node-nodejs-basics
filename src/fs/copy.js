import fsPromise from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const oldFolderName = path.join(__dirname, 'files');
const newFolderName = path.join(__dirname, 'files_copy');

async function checkFolderExists(folderName) {
    try {
        const stat = await fsPromise.stat(folderName);
        if (stat) {
            return true;
        }
    } catch (error) {
        return false;
    }
}

async function copyFiles() {
    fs.readdir(oldFolderName, (err, files) => {
        if (err) {
            throw new Error(fsOperationFailed);

        } else {
            files.forEach(file => {
                let curFile = path.join(oldFolderName, file);

                fs.stat(curFile, function (err, stats) {
                    const newFile = path.join(newFolderName, file);
                    fs.createReadStream(curFile).pipe(fs.createWriteStream(newFile));
                })
            });
        }
    })
}

async function createFolder(params) {
    fs.mkdir(newFolderName, (err) => {
            if (err) {
                return console.error(err);
            }
        });
}

export const copy = async () => {
    const oldFolderExists = await checkFolderExists(oldFolderName);
    const newFolderExists = await checkFolderExists(newFolderName);
    if (!oldFolderExists || newFolderExists) {
        throw new Error(fsOperationFailed);
    } else {
        await createFolder();
        await copyFiles();
        sendMessage('Folder and files were copied');
    }
};

copy();