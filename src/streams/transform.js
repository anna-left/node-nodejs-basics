import { Transform, pipeline } from 'stream';

import { sendMessage } from '../global/globalFunctions.js';

export const transform = async () => {
    const stdin = process.stdin;
    const stdout = process.stdout;

    sendMessage('Please enter data for transformation');

    const transformReverse = new Transform({
        transform(chunk, enc, cb) {
            const trimChunk = chunk.toString().trim();
            const reversedChunk = trimChunk.split("").reverse().join("");
            this.push(reversedChunk + '\n');
            cb();
        }
    })
    pipeline(
        stdin,
        transformReverse,
        stdout,
        error => {
            console.log(`Error: ${error}`);
        }
    )
};

transform();