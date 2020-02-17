const fs = require(`fs`);
const insertLine = require(`insert-line`);
const chalk = require(`chalk`);
const lineExists = require(`../utils/lineExists`);

const path = `.env`;

function modifyEnv(config) {
  const settings = `GATSBY_SANITY_PROJECT_ID = ${config.projectId}
GATSBY_SANITY_DATASET = ${config.dataset}
GATSBY_SANITY_TOKEN = ${config.token}`;

  if (!fs.existsSync(path)) {
    fs.writeFile(`.env`, settings, err => {
      if (err) throw err;
      console.log(
        `${chalk.green('success')} ${path} file created with Sanity settings`
      );
    });
  } else {
    if (!lineExists(path, 'SANITY_')) {
      insertLine(path).appendSync(settings);
      console.log(
        `${chalk.green('success')} Sanity settings added to ${path} file`
      );
    } else {
      console.log(
        `${chalk.yellow('warn')} ${path} already contains Sanity settings`
      );
    }
  }
}

module.exports = modifyEnv;
