import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { sendMessage } from '../global/globalFunctions.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileName = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {

    const fileBuffer = fs.readFileSync(fileName);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    sendMessage('SHA256 hash as hex');
    console.log(hex); 
};

calculateHash();