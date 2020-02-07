const fs = require(`fs`);
const chalk = require(`chalk`);
const insertLine = require(`insert-line`);
const lineNumber = require(`line-number`);
const lineExists = require(`./lineExists`);

const path = `./gatsby-config.js`;

function deserializeOptions(options) {
  return Object.entries(options)
    .map(([key, value]) => `${key}: ${value},`)
    .join('\n\t\t');
}

function addGatsbyPlugin(pluginName, options) {
  if (!lineExists(path, pluginName)) {
    const plugin = `    {
      resolve: '${pluginName}',
      options: {
        ${deserializeOptions(options)}
      },
    },`;

    const data = fs.readFileSync(path, `utf8`);
    const regex = /plugins: \[/;
    const pluginsLineNumber = lineNumber(data, regex)[0].number;
    insertLine(path)
      .contentSync(plugin)
      .at(pluginsLineNumber + 1);
    console.log(
      `${chalk.green('success')} gatsby-source-sanity settings added to plugins`
    );
  } else {
    console.log(
      `${chalk.yellow(
        'warn'
      )} ${path} already has gatsby-source-sanity settings`
    );
  }
}

module.exports = addGatsbyPlugin;
