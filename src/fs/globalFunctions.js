const fsOperationFailed = addFrame('FS operation failed');

function addFrame(message) {
  const stars = '*'.repeat(message.length + 12);
  return `\n\n${stars}\n***** ${message} *****\n${stars}\n`;
}

function sendMessage(message) {
  console.log(addFrame(message));
}

export { fsOperationFailed, sendMessage };