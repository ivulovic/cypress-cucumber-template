/// <reference types="cypress" />

const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found.');
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  /**
   * Add ability to log to node console
   */
  on('task', {
    log() {
      console.log.apply(null, arguments);
      return null;
    }
  });

  const file = config.env.configFile; //we will use no default value

  on('file:preprocessor', cucumber());

  return getConfigurationByFile(file);
};
