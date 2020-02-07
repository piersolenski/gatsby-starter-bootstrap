const replace = require('replace-in-file');
const chalk = require(`chalk`);

function logResults(results) {
  console.log(
    `${chalk.green(
      'success'
    )} Layout component removed from the following pages:`
  );
  results.forEach(result => {
    console.log(result.file);
  });
}

function removeLayoutFromPages() {
  const options = {
    files: 'src/pages/*.js',
    from: [/\nimport Layout from '.*';/g, /<Layout>/g, /<\/Layout>/g],
    to: ['', '<>', '</>'],
  };

  const results = replace.sync(options);

  logResults(results);
}

module.exports = removeLayoutFromPages;
