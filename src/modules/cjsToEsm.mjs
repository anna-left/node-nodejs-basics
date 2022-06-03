import path from 'path'; 
import { URL } from 'url';

import { release, version } from 'os';
import http from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', { assert: { type: "json" } }).then((module) => module.default);
} else {
    unknownObject = await import('./files/b.json', { assert: { type: "json" } }).then((module) => module.default);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

