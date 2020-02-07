const installPackages = require(`../utils/installPackages`);
const addGatsbyPlugin = require(`../utils/addGatsbyPlugin`);
const removeLayoutFromPages = require(`./removeLayoutFromPages`);

const pluginOptions = {
  layout: `require.resolve('./src/components/common/Layout.js')`,
};

async function installTransitionLink(config) {
  await installPackages([`gatsby-plugin-transition-link`]);
  addGatsbyPlugin(`gatsby-plugin-transition-link`, pluginOptions);
  removeLayoutFromPages();
}

module.exports = installTransitionLink;
