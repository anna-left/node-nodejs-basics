const fsOperationFailed = addFrame('FS operation failed', '*');

function addFrame(message, symb) {
  const longLine = symb.repeat(message.length + 12);
  const shortLine = symb.repeat(5);
  return `\n\n${longLine}\n${shortLine} ${message} ${shortLine}\n${longLine}\n`;
}

function sendMessage(message) {
  console.log(addFrame(message, '-'));
};

export { fsOperationFailed, sendMessage };