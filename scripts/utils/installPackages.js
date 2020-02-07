const npm = require('npm');
const chalk = require('chalk');

async function installPackages(modules) {
  return new Promise((resolve, reject) => {
    console.log(`${chalk.blue('info')} Installing ${modules.join(', ')}...`);
    npm.load(error => {
      if (error) throw new Error(message);
      npm.commands.install(modules, (error, data) => {
        if (error) return reject(error);
        console.log(`${chalk.green('success')} Installation complete!`);
        resolve(data);
      });
      npm.on('log', function(message) {
        console.log(message);
      });
    });
  });
}

module.exports = installPackages;
