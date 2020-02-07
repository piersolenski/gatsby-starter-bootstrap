const installPackages = require(`../utils/installPackages`);
const modifyEnv = require(`./modifyEnv`);
const addDotEnv = require(`./addDotEnv`);
const addGatsbyPlugin = require(`../utils/addGatsbyPlugin`);

const pluginOptions = {
  projectId: `process.env.SANITY_PROJECT_ID`,
  dataset: `process.env.SANITY_DATASET`,
  token: `process.env.SANITY_TOKEN`,
};

async function installSanity(config) {
  await installPackages([`dotenv`, `gatsby-source-sanity`]);
  modifyEnv(config);
  addDotEnv();
  addGatsbyPlugin('gatsby-source-sanity', pluginOptions);
}

module.exports = installSanity;
