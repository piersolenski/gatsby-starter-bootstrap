const installPackages = require(`../utils/installPackages`);
const modifyEnv = require(`./modifyEnv`);
const addDotEnv = require(`./addDotEnv`);
const addGatsbyPlugin = require(`../utils/addGatsbyPlugin`);

const pluginOptions = {
  projectId: `process.env.GATSBY_SANITY_PROJECT_ID`,
  dataset: `process.env.GATSBY_SANITY_DATASET`,
  token: `process.env.GATSBY_SANITY_TOKEN`,
};

async function installSanity(config) {
  await installPackages([`dotenv`, `gatsby-source-sanity`]);
  modifyEnv(config);
  addDotEnv();
  addGatsbyPlugin('gatsby-source-sanity', pluginOptions);
}

module.exports = installSanity;
