const fs = require('fs');
const lineNumber = require('line-number');

function lineExists(path, regex) {
  const data = fs.readFileSync(path, 'utf8');
  const isPresentInFile = lineNumber(data, new RegExp(regex)).length > 0;
  return isPresentInFile;
}

module.exports = lineExists;
