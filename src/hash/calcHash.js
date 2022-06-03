import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

import { sendMessage } from '../global/globalFunctions.js';

const __dirname = path.resolve();
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