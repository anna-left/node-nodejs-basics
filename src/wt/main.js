import { Worker } from 'worker_threads';
import fs from 'fs';
import path from 'path';
import os from 'os';

import { sendMessage } from '../global/globalFunctions.js';

const cpuCount = os.cpus().length;

const __dirname = path.resolve();
const fileName = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
    const resultPromises = [];
    for (let i = 0; i < cpuCount; i++) {
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(fileName, {
                workerData: 10 + i
            });
            worker.on('message', (res) => {
                resolve(res);
            });
        })
        resultPromises.push(promise);
    }
    sendMessage('Result of the computation from workers');
    const resPromise = await Promise.all(resultPromises);
    for (let i = 0; i < resPromise.length; i++) {
        console.log(resPromise[i]);
    }
};

performCalculations();