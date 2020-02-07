const chalk = require(`chalk`);
const insertLine = require(`insert-line`);
const lineExists = require(`../utils/lineExists`);

const path = `./gatsby-config.js`;

const dotEnv = `require('dotenv').config({
  path: \`.env.\${process.env.NODE_ENV}\`
});`;

function addDotEnv() {
  if (!lineExists(path, /require\('dotenv'\)/)) {
    insertLine(path).prependSync(dotEnv);
    console.log(`${chalk.green('success')} dot-env added to gatsby-config`);
  } else {
    console.log(`${chalk.yellow('warn')} ${path} already requires dotenv`);
  }
}

module.exports = addDotEnv;
