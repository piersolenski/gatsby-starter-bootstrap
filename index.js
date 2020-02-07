const inquirer = require(`inquirer`);
const sanityInstaller = require(`./scripts/sanity-installer`);
const transitionLinkInstaller = require(`./scripts/transition-link-installer`);

async function initInteractiveInstaller() {
  const preferences = await inquirer.prompt([
    {
      type: `list`,
      name: `CMS`,
      message: `Pick a CMS`,
      choices: [`Sanity`, `None`],
      filter(val) {
        if (val === `No CMS`) return false;
        return val.toLowerCase();
      },
    },
    ...[`projectId`, `dataset`, `token`].map(setting => ({
      type: `input`,
      name: setting,
      message: `Enter your ${setting}`,
      when: function(answers) {
        return answers.CMS === 'sanity';
      },
      validate: value => {
        if (value) return true;
        return `Please enter a ${setting}`;
      },
    })),
    {
      type: `confirm`,
      name: `pageTransitions`,
      message: `Does your project need page transitions?`,
    },
  ]);

  if (preferences.CMS === 'sanity') {
    sanityInstaller({
      projectId: preferences.projectId,
      dataset: preferences.dataset,
      token: preferences.token,
    });
  }

  if (preferences.pageTransitions) {
    transitionLinkInstaller();
  }
}

initInteractiveInstaller();
